import React, { useState } from 'react'
import '../../styles/components/_header-component.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { debugLog } from '../../utils/tools';
import { ClickAwayListener } from '@mui/base';
import Nav from './Nav';
import { Link } from 'gatsby';

import Logo from '../../assets/img/CloudClass-8_adobe_express.svg'
import { EmailOutlined, MenuOpenOutlined, MenuOutlined, MessageOutlined, Person2Outlined } from '@mui/icons-material';
import { Badge, IconButton, useMediaQuery } from '@mui/material';
import { createContext } from 'react';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';

const HeaderContext = createContext(null);


const navMenuStyles = {
    expanded: {
        transform: 'translateY(0px) translateX(0px)',
        transition: 'transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    },
    collapsed: {
        transform: 'translateY(-1193px) translateX(0px)',
        transition: 'transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    },
    nothing: {}
}

const Navigation = () => {

    const { toggleMenu, showMenu, hideMenu, resolution, collapsed, geMedium, ltMedium } = useContext(HeaderContext);



    return (
        <nav role="navigation" data-collapse={resolution}
            style={{ ...navMenuStyles[collapsed && ltMedium ? 'collapsed' : !collapsed && ltMedium ? 'expanded' : 'nothing'] }}
            className="nav-menu md:ml-60  w-nav-menu items-center justify-center">
            <Link to="/" className="nav-link">云课堂</Link>
            <div className="header-dropdown w-dropdown " >
                <div className="header-dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                    role="button"
                    data-trigger-target="submenu1" onClick={toggleMenu}
                    tabIndex="0">
                    <div className="nav-link flex items-center">页面&nbsp;&nbsp;
                        <span className="dropdown-icon"                                >
                            {showMenu.submenu1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </span>
                    </div>
                </div>
                <Nav id="submenu1" showUp={showMenu.submenu1} submenu="submenu1" />
            </div>
            <div className="header-dropdown w-dropdown " >
                <div className="header-dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-1"
                    role="button"
                    data-trigger-target="submenu2" onClick={toggleMenu}
                    tabIndex="1">
                    <div className="nav-link flex items-center" >课程&nbsp;&nbsp;
                        <span className="dropdown-icon"                                >
                            {showMenu.submenu2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </span>
                    </div>
                </div>
                <Nav id="submenu2" showUp={showMenu.submenu2} submenu="submenu2" />
            </div>
        </nav>
    )
};



const styles = {
    expanded: {
        height: '10903px',
        display: 'block',
    },
    collapsed: {
        display: 'none',
    }
}


const Header = () => {

    const theme = useTheme()
    const geMedium = useMediaQuery(theme.breakpoints.up('md'));
    const ltMedium = useMediaQuery(theme.breakpoints.down('md'))

    const initMenuState = {
        submenu1: false,
        submenu2: false,
        loginform: false,
    }

    const [showMenu, setShowMenu] = useState(initMenuState);
    const [collapsed, setCollapsed] = useState(true);

    const toggleMenu = (e) => {
        const triggerDom = e.currentTarget;
        const target = triggerDom.dataset.triggerTarget;

        const changedState = {
            ...initMenuState,
            [target]: !showMenu[target]
        }

        setShowMenu(changedState);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }

    const context = {
        toggleMenu,
        showMenu,
        hideMenu,
        geMedium,
        ltMedium,
        collapsed,

    }

    const toggleCollapse = (e) => {
        debugLog("toggle collapsed")
        setCollapsed(!collapsed)
    }

    return (
        <HeaderContext.Provider value={context}>

            <ClickAwayListener onClickAway={hideMenu}>

                <div>

                    <div className='header w-nav shadow-md min-w-[425px] w-full'>
                        <div className="container-default-1209px w-container">
                            <div className="header-wrapper">
                                <div className="split-content header-left" >
                                    <Link to="/" className="brand w-nav-brand" >
                                        <img src={Logo} alt="" />
                                    </Link>
                                    {geMedium && <Navigation resolution="medium" className="hidden md:block" />}

                                </div>
                                <div className='flex justify-end items-end'>
                                    <div className='flex header-right  gap-4 items-center relative'>
                                        <Badge badgeContent={9} color="warning">
                                            <EmailOutlined className="text-[32px]" />
                                        </Badge>
                                        <Badge badgeContent={32} color="primary">
                                            <MessageOutlined className="text-[32px]" />
                                        </Badge>
                                        <Badge badgeContent={99} color="warning">
                                            <Person2Outlined data-trigger-target="loginform" color={showMenu.loginform ? 'primary' : 'inherit'} className="text-[32px] " onClick={toggleMenu} />
                                        </Badge>
                                        {geMedium && <Nav id="loginform" showUp={showMenu.loginform} submenu="loginform" />}
                                    </div>
                                    {ltMedium && <IconButton className='hamburger flex' onClick={toggleCollapse}>
                                        {collapsed ? <MenuOutlined /> : <MenuOpenOutlined />}
                                    </IconButton>}
                                </div>
                            </div >
                        </div>
                        <div className="w-nav-overlay"
                        // style={{ ...styles[!collapsed ? 'collapsed' : 'expanded'] }}

                        >
                            {ltMedium && <Navigation resolution="small" />}
                        </div>
                    </div>

                </div>
            </ClickAwayListener>

        </HeaderContext.Provider >
    )
}

export default Header