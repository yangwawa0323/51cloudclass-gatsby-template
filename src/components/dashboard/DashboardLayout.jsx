import Sidebar from './sidebar';
import React, { useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import Navbar from './navbar';
import PagePane from './PagePane';
import { useGlobalContext } from '../../../wrap-with-provider';
import { navigate } from 'gatsby';
import NoAuthority from '../../pages/noauthority';

const DashboardLayout = ({ children }) => {
	const { isLogin } = useGlobalContext();

	if (!isLogin) return <NoAuthority />;

	const { activeMenu, screenSize } = useStateContext();

	const activeMenuStyle =
		'z-50 fixed w-52 duration-[300ms] bg-white transition-[width] ease-in-out bg-white min-h-screen';
	const deactiveMenuStyle =
		'z-50 w-0 transition-[width] duration-[300ms] bg-white ';

	return (
		<div className='flex relative dark:bg-blend-darken w-full'>
			<div className={activeMenu ? activeMenuStyle : deactiveMenuStyle}>
				<Sidebar />
			</div>

			<div
				className={
					activeMenu
						? 'w-full min-h-screen md:ml-52'
						: 'w-full min-h-screen flex-2'
				}
			>
				<div className='fixed w-full md:static'>
					<Navbar />
					<PagePane>{children}</PagePane>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
