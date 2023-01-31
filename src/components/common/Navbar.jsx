/**
 * Media query is OK.
 *
 * @format
 */

import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/index.scss';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useCallback } from 'react';
import Profile from '../profile';

const LoginContainer = ({ textColor }) => (
	<Box
		className='text-white rounded-md px-4 py-2 hover:opacity-75 duration-700'
		style={
			textColor === 'white'
				? { background: textColor, filter: 'brightness(1)' }
				: {
						background: 'rgb(116, 33, 252)',
						filter: 'darkness(1)',
				  }
		}
	>
		<Box
			className='text-xs leading-5'
			style={{
				color: textColor !== 'white' ? 'white' : 'black',
			}}
		>
			<Link to='/login'>登录</Link>
		</Box>
	</Box>
);

const RegisterContainer = ({ textColor }) => (
	<Box>
		<Box
			style={{
				color: textColor,
			}}
		>
			<Link to='/register'>注册 / </Link>
		</Box>
	</Box>
);

const Navbar = (props) => {
	const [menuItems] = useState([
		{ title: '首页', link: '/' },
		{ title: '样式指南', link: '/' },
		{ title: '页面', link: '/' },
		{ title: '成长历史', link: '/changelog' },
	]);
	const { backgroundColor, textColor } = props;

	const userInfo = useSelector((state) => state.account.userInfo);

	const isLogin = useCallback(() => userInfo !== null, [userInfo]);

	return (
		<div className='min-w-[768px] navbar-container items-center place-content-center flex-col flex-nowrap overflow-visible relative'>
			<div
				style={{ backgroundColor: backgroundColor, color: textColor }}
				className={`fixed w-full ${
					!backgroundColor ? 'bg-white' : ''
				}  flex z-50 flex-grow-0 flex-shrink-0 gap-0 -translate-x-1/2 left-1/2`}
			>
				<div className='w-full'>
					<nav className='items-center flex overflow-hidden p-6 relative h-16'>
						<div className='w-full flex flex-row items-center justify-between'>
							<div className='logo'>
								<div className='flex flex-row gap-3 items-center'>
									<h1
										style={{ color: textColor }}
										className='text-sm'
									>
										51cloudclass 云课堂科技
									</h1>
								</div>
							</div>
							<div className='flex flex-row gap-5 pr-10 items-center text-xs font-semibold'>
								{menuItems.map((menu, index) => (
									<div key={index}>
										<p
											style={{
												color: textColor,
											}}
										>
											<Link to={menu.link}>{menu.title}</Link>
										</p>
									</div>
								))}
								{isLogin() ? (
									<Profile />
								) : (
									<Box
										display='flex'
										alignItems='center'
										flexDirection='row'
										gap='12px'
									>
										<RegisterContainer textColor={textColor} />
										<LoginContainer textColor={textColor} />
									</Box>
								)}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
