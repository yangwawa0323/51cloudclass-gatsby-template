import React, { useState } from 'react'
import '../../styles/components/_header-component.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { debugLog } from '../../utils/tools';
import { ClickAwayListener } from '@mui/base';
import Nav from './Nav';
import { Link } from 'gatsby';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        debugLog("toggle menu")

        setShowMenu(!showMenu);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }

    return (
        <ClickAwayListener onClickAway={hideMenu}>

            <div className='header w-nav '>
                <div className="header-wrapper">
                    <div className="split-content header-left" >
                        <a href="/" className="brand w-nav-brand" >
                            <img
                                src="https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3561420b2dd2_logo-academy-template.svg"
                                alt="" className="header-logo" />
                        </a>
                        <nav role="navigation" className="nav-menu w-nav-menu items-center justify-center">
                            <Link to="/" className="nav-link">云课堂</Link>
                            <div className="header-dropdown w-dropdown " >
                                <div className="header-dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                                    role="button"
                                    tabIndex="0">
                                    <div className="nav-link flex items-center" onClick={toggleMenu}>页面&nbsp;&nbsp;
                                        <span className="dropdown-icon"                                >
                                            {showMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </span>
                                    </div>
                                </div>
                                <Nav showUp={showMenu} />

                            </div>
                            <Link to="/courses" className="nav-link w--current">课程</Link>
                            <a href="/about-us"
                                className="nav-link">About</a>

                        </nav>
                    </div>
                </div >
            </div>
        </ClickAwayListener>
    )
}

export default Header