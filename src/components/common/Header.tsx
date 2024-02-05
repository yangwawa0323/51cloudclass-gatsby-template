/** @format */

import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ClickAwayListener } from '@mui/base';
import Nav from './Nav';
import { Link, navigate } from 'gatsby';

import Logo from '../../assets/img/CloudClass-8_adobe_express.svg';
import {
	EmailOutlined,
	MenuOpenOutlined,
	MenuOutlined,
	MessageOutlined,
} from '@mui/icons-material';
import {
	Avatar,
	Badge,
	Button,
	IconButton,
	useMediaQuery,
} from '@mui/material';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import HeaderContextProvider, { HeaderContext } from './HeaderContentProvider';
import { useCallback } from 'react';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getAccount } from '51cloudclass-utilities/src/account';
import { isBrowser } from '51cloudclass-utilities/src/net';
import { globalContext } from '../../../wrap-with-provider';
import { MenuButton, Dropdown, Menu } from '@mui/base';

import { LoginForm } from '../common/Nav';
import { debugLog } from '51cloudclass-utilities/src/utils';

const navMenuStyles = {
	expanded: {
		transform: 'translateY(0px) translateX(0px)',
		transition: 'transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
	},
	collapsed: {
		transform: 'translateY(-1193px) translateX(0px)',
		transition: 'transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
	},
	nothing: {},
};

type NavProps = {
	resolution: string;
};

const Navigation = ({ resolution }: NavProps) => {
	const { toggleMenu, showMenu, /* resolution ,*/ collapsed, ltMedium } =
		useContext(HeaderContext);

	return (
		<nav
			role='navigation'
			data-collapse={resolution}
			style={{
				...navMenuStyles[
					collapsed && ltMedium
						? 'collapsed'
						: !collapsed && ltMedium
						? 'expanded'
						: 'nothing'
				],
			}}
			className='nav-menu md:ml-60 w-nav-menu flex md:justify-center md:items-center'
		>
			<Link
				to='/'
				className='nav-link'
			>
				云课堂
			</Link>
			<div className='header-dropdown w-dropdown '>
				<div
					className='header-dropdown-toggle w-dropdown-toggle'
					id='w-dropdown-toggle-0'
					role='button'
					data-trigger-target='submenu1'
					onClick={toggleMenu}
					onKeyDown={toggleMenu}
					tabIndex={-1}
				>
					<div className='nav-link flex items-center'>
						页面&nbsp;&nbsp;
						<span className='dropdown-icon'>
							{showMenu.submenu1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
						</span>
					</div>
				</div>
				<Nav
					id='submenu1'
					showUp={showMenu.submenu1}
					submenu='submenu1'
				/>
			</div>
			<div className='header-dropdown w-dropdown '>
				<div
					className='header-dropdown-toggle w-dropdown-toggle'
					id='w-dropdown-toggle-1'
					role='button'
					data-trigger-target='submenu2'
					onClick={toggleMenu}
					onKeyDown={toggleMenu}
					tabIndex={-2}
				>
					<div className='nav-link flex items-center'>
						课程&nbsp;&nbsp;
						<span className='dropdown-icon'>
							{showMenu.submenu2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
						</span>
					</div>
				</div>
				<Nav
					id='submenu2'
					showUp={showMenu.submenu2}
					submenu='submenu2'
				/>
			</div>
		</nav>
	);
};

const navOverlayStyles = {
	expanded: {
		// height: '10903px',
		// display: 'block',
		zIndex: 1000,
	},
	collapsed: {
		// display: 'none',
		zIndex: -1,
	},
};

const LoginIconsWrapper = () => {
	const reduxAvatar = useSelector(
		(state: { auth: { account?: { avatar: string } } }) =>
			state.auth.account?.avatar
	);

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		debugLog('click away');
		setShowMenu((prev) => !prev);
	};

	const { badgeNumber } = useContext(HeaderContext);

	const { isExpired, isLogin } = useContext(globalContext);

	const gotoLoginPage = () => {
		navigate('/login');
	};

	if (isLogin && !isExpired) {
		return (
			<ClickAwayListener onClickAway={() => setShowMenu(false)}>
				<div className='flex self-end gap-4 items-center mr-4'>
					<Badge
						badgeContent={9}
						color='warning'
					>
						<EmailOutlined className='text-[32px] cursor-pointer' />
					</Badge>
					<Badge
						badgeContent={badgeNumber}
						color='primary'
					>
						<MessageOutlined className='text-[32px] cursor-pointer' />
					</Badge>
					<Dropdown
						open={showMenu}
						onOpenChange={toggleMenu}
					>
						<MenuButton>
							<Avatar
								// onClick={toggleMenu}
								src={reduxAvatar || getAccount()?.avatar}
								className='cursor-pointer'
							/>
						</MenuButton>
						<Menu className='relative z-50 transition-all duration-500'>
							<LoginForm />
						</Menu>
					</Dropdown>
					{/* <Nav
					id='loginform'
					showUp={showMenu.loginform && geMedium}
					submenu='loginform'
				/> */}
				</div>
			</ClickAwayListener>
		);
	} else {
		return (
			<div className='flex login-button header-right  gap-4 items-center relative'>
				<Button
					className='bg-purple-600 text-sm'
					size='medium'
					variant='contained'
					onClick={gotoLoginPage}
					endIcon={<VideoLibraryOutlinedIcon className='text-lg' />}
				>
					登录
				</Button>
			</div>
		);
	}
};

const initMenuState: { [key: string]: boolean } = {
	submenu1: false,
	submenu2: false,
	loginform: false,
};

const Header = () => {
	const [showMenu, setShowMenu] = useState<typeof initMenuState>(initMenuState);
	const [collapsed, setCollapsed] = useState(true);
	const [badgeNumber, setBadgeNumber] = useState(1);

	const { isTourOpen } = useContext(globalContext);

	const theme = useTheme();
	const geMedium = useMediaQuery(theme.breakpoints.up('md'));
	const ltMedium = useMediaQuery(theme.breakpoints.down('md'));

	const isLoginPage = useCallback(() => {
		return isBrowser ? window.location.pathname === '/login/' : false;
	}, []);

	const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
		const triggerDom = e.currentTarget;

		const target = triggerDom.dataset.triggerTarget! as string;

		let changedState = {
			...initMenuState,
			[target]: !showMenu[target],
		};

		setShowMenu((nextState) => (nextState = changedState));
		setBadgeNumber((nextState) => nextState + 1);
	};

	const hideMenu = () => {
		setShowMenu(initMenuState);
	};

	const context = {
		toggleMenu,
		showMenu,
		setShowMenu,
		hideMenu,
		geMedium,
		ltMedium,
		collapsed,
		badgeNumber,
		setBadgeNumber,
		isLoginPage,
	};

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<HeaderContextProvider extraContext={context}>
			<ClickAwayListener onClickAway={hideMenu}>
				<div>
					<div className='header w-nav w-full'>
						<div className='container-default-1209px w-container xs:p-0 xs:mx-auto'>
							<div className='header-wrapper'>
								<div className='split-content header-left'>
									<Link
										to='/'
										className='brand w-nav-brand'
									>
										<img
											src={Logo}
											alt=''
										/>
									</Link>
									{geMedium && (
										<Navigation
											resolution='medium'
											// className='hidden md:block'
										/>
									)}
								</div>

								<div className='flex justify-between ml-10 gap-4 w-full'>
									{ltMedium && (
										<IconButton
											className='hamburger flex text-lg'
											onClick={toggleCollapse}
										>
											{collapsed ? <MenuOutlined /> : <MenuOpenOutlined />}
										</IconButton>
									)}
									<LoginIconsWrapper />
								</div>
							</div>
						</div>
						<div
							className='w-nav-overlay'
							style={{
								...navOverlayStyles[collapsed ? 'collapsed' : 'expanded'],
							}}
						>
							{ltMedium && <Navigation resolution='small' />}
						</div>
					</div>
					<ToastContainer />
				</div>
			</ClickAwayListener>
		</HeaderContextProvider>
	);
};

export default Header;
