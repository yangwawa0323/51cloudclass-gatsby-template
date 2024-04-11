import { getAccount } from '../../utilities/account';
import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { profileContext } from './ProfileContextProvider';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';

const Sidebar = () => {
	const { openDialog } = useContext(profileContext);
	const account = getAccount();

	const avatar = localStorage.getItem('account')
		? JSON.parse(localStorage.getItem('account') as string).avatar
		: useSelector((state: any) => state.auth.account?.avatar as string);

	if (
		!account ||
		(typeof account === 'object' && !account.hasOwnProperty('name'))
	) {
		// navigate("/")
		return (
			<div className='flex flex-col gap-2'>
				<h4>请登录设置个人信息</h4>
				<p>
					点击<Link to='/login'>这里</Link>登录
				</p>
			</div>
		);
	}

	return (
		<div className='gsap-sidebar sidebar profile'>
			<div className='card teachers'>
				<div className='flex flex-col gap-0 justify-center items-center p-8 max-w-[320px]'>
					<img
						src={avatar}
						alt={account?.name}
						className='rounded-full w-40 h-auto'
					/>
					<Button
						onClick={openDialog}
						className='mt-4 text-xs'
						size='small'
						variant='outlined'
					>
						换头像
					</Button>
					<h1 className='mt-6 text-2xl'>{account?.name}</h1>
					<div className='uppercase font-medium text-blue-600 text-xl'>
						Digital Marketer
					</div>
					<div className='mb-3 font-medium text-gray-400'>{account?.email}</div>
					<p className='text-center mb-8 text-gray-500 font-normal leading-7'>
						Lorem ipsum dolor sit amet, consectet adipiscing elit. Ut sit
						curabitur pellentesq sollicitudin malesuada aliquam risus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
