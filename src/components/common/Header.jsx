import React, { useState } from 'react'
import '../../styles/components/_header-component.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { debugLog } from '../../utils/tools';
import { ClickAwayListener } from '@mui/base';
import Nav from './Nav';
import { Link } from 'gatsby';

import Logo from '../../assets/img/CloudClass-8_adobe_express.svg'
import { EmailOutlined, MessageOutlined, Person2Outlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Header = () => {

    const initMenuState = {
        submenu1: false,
        submenu2: false,
        loginform: false,
    }

    const [showMenu, setShowMenu] = useState(initMenuState);

    const toggleMenu = (e) => {
        const triggerDom = e.currentTarget;
        const target = triggerDom.dataset.triggerTarget;
        e.stopPropagation()
        debugLog("toggle menu : ", target)

        const changedState = {
            ...initMenuState,
            [target]: !showMenu[target]
        }

        setShowMenu(changedState);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }

    return (
        <ClickAwayListener onClickAway={hideMenu}>

            <div className='header w-nav shadow-md'>
                <div className="header-wrapper">
                    <div className="split-content header-left" >
                        <Link to="/" className="brand w-nav-brand" >
                            <img src={Logo} alt="" />
                        </Link>
                        <nav role="navigation" className="nav-menu md:ml-60  w-nav-menu items-center justify-center">
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

                    </div>
                    <div className='header-right flex gap-4 items-center relative'>
                        <Badge badgeContent={9} color="warning">
                            <EmailOutlined className="text-[32px]" />
                        </Badge>
                        <Badge badgeContent={32} color="primary">
                            <MessageOutlined className="text-[32px]" />
                        </Badge>
                        <Badge badgeContent={99} color="warning">
                            <Person2Outlined data-trigger-target="loginform" color={showMenu.loginform ? 'primary' : 'inherit'} className="text-[32px] " onClick={toggleMenu} />
                        </Badge>
                        <Nav id="loginform" showUp={showMenu.loginform} submenu="loginform" />
                    </div>

                </div >
            </div>
        </ClickAwayListener>
    )
}

export default Header