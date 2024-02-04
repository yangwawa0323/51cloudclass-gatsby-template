/** @format */

import { Link, graphql, navigate, useStaticQuery } from 'gatsby';
import React, { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { utils, logout } from '51cloudclass-utilities/dist';
import { Avatar } from '@mui/material';

import {
	AssignmentOutlined,
	EventAvailableOutlined,
	HouseOutlined,
	LockPersonOutlined,
	NotificationsOutlined,
	Person2Outlined,
} from '@mui/icons-material';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { SettingOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { HeaderContext } from './HeaderContentProvider';
import { cleanTokenEtag } from '51cloudclass-utilities/src/account';
import { useDispatch, useSelector } from 'react-redux';
import { globalContext } from '../../../wrap-with-provider';

import type { Course } from '..';
import { ICourseInput } from '../../utils/types';

const { getAxios } = utils;
const axiosInstance = getAxios();

/** BEGIN SubMenu1 */
const SubMenu1 = () => {
	const { isLogin, isExpired } = useContext(globalContext);

	const dispatch = useDispatch();

	const handleLoginOut = () => {
		cleanTokenEtag();
		dispatch(logout());
		navigate('/login');
	};

	return (
		<div>
			<p className='mega-menu-title hidden-mobile'>页面</p>
			<div className='menu-2-columns'>
				<div className='mega-menu-column-1'>
					<Link
						to='/'
						className='mega-menu-link'
					>
						首页
					</Link>
					{/* <Link to="/login" className="mega-menu-link" >登录</Link> */}

					<Link
						to='/courses'
						aria-current='page'
						className='mega-menu-link w--current'
					>
						课程
					</Link>
					<Link
						to='/asciinema-list'
						aria-current='page'
						className='mega-menu-link w--current'
					>
						字节流视频
					</Link>
					<Link
						to='/about1'
						className='mega-menu-link'
					>
						关于我们
					</Link>
					<Link
						to='/styleguide'
						className='mega-menu-link'
					>
						样式
					</Link>

					<span
						className='mega-menu-link'
						role='botton'
						tabIndex={-1}
						onClick={handleLoginOut}
						onKeyDown={handleLoginOut}
					>
						{' '}
						{isLogin && !isExpired ? (
							<span className='flex flex-row gap-2 text-red-600'>
								<LockPersonOutlined color='error' />
								退出
							</span>
						) : (
							<span className='flex flex-row gap-2'>
								<VideoLibraryOutlinedIcon color='primary' />
								登录
							</span>
						)}
					</span>
				</div>
				<div className='mega-menu-column-3'>
					<Link
						to='/price2'
						className='mega-menu-link'
					>
						收费
					</Link>
					<Link
						to='/changelog'
						className='mega-menu-link'
					>
						历史版本
					</Link>
				</div>
				<div className='mega-menu-column-3'>
					<Link
						to='/copyright'
						className='mega-menu-link'
					>
						版权申明
					</Link>
					<Link
						to='/contact1'
						className='mega-menu-link'
					>
						联系我们
					</Link>
				</div>
			</div>
		</div>
	);
};
/** END SubMenu1 */

/** BEGIN SubMenu2 */
const SubMenu2 = () => {
	// const fetchTop8Courses = async () => {
	// 	let url = `${process.env.GATSBY_API_SERVER}/courses/?limit=8`;
	// 	const response = await axiosInstance.get(url);
	// 	return response.data;
	// };

	// const { data, isLoading, error } = useQuery({
	// 	queryKey: ['fetch-top-courses', 8],
	// 	queryFn: fetchTop8Courses,
	// });

	// if (isLoading || error) return <div>加载中Oo.</div>;

	const data = useStaticQuery(graphql`
		query {
			allCourse(
				limit: 8
				sort: { id: DESC }
				filter: { is_shop: { eq: true } }
			) {
				nodes {
					id
					name
					image
					description
					is_shop
				}
			}
		}
	`);

	const courses = data.allCourse.nodes;
	return (
		<>
			<div className='mega-menu-column-4'>
				<h5 className='mega-menu-title'>课程分类</h5>
				{courses.map((course: ICourseInput, index: number) => (
					<Link
						key={index}
						to={`/courses/${course.id}`}
						className='mega-menu-link'
					>
						{course.name}
					</Link>
				))}

				<Link
					to='/courses'
					className='mega-menu-link-2 special '
				>
					更多大数据云计算系列
				</Link>
			</div>
		</>
	);
};
/** END SubMenu2 */

/** BEGIN LoginForm */
const LoginForm = () => {
	const { hideMenu } = useContext(HeaderContext);
	const dispatch = useDispatch();

	const { setIsLogin } = useContext(globalContext);

	const accountLogout = () => {
		dispatch(logout());
		cleanTokenEtag();
		hideMenu();
		setIsLogin(false);
		navigate('/');
	};

	let userAvatar = useSelector(
		(state: { auth: { account?: { avatar: string } } }) =>
			state.auth.account?.avatar
	);

	const navgateTo = (url: string) => {
		navigate(url);
	};

	return (
		<div className='z-[1000] absolute top-16 -right-36 h-fit rounded-xl shadow-xl flex items-center justify-center bg-gray-100 py-6'>
			<div className='flex gap-2 flex-col whitespace-nowrap max-w-xs p-4 items-center bg-white'>
				<Avatar
					src={userAvatar}
					className='outline-2 w-24 h-24'
				/>
				<ul className='flex flex-col w-full'>
					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<HouseOutlined />
							</span>
							<span className='ml-3'>面板</span>
							<span className='flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto'>
								3
							</span>
						</div>
					</li>
					<li className='my-px'>
						<span className='flex font-medium text-sm text-gray-400 px-4 my-4 uppercase'>
							学习计划
						</span>
					</li>

					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<EventAvailableOutlined />
							</span>
							<span className='ml-3'>学习进度</span>
						</div>
					</li>
					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<AssignmentOutlined />
							</span>
							<span className='ml-3'>历史记录</span>
							<span className='flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto'>
								1k
							</span>
						</div>
					</li>

					<li className='my-px'>
						<span className='flex font-medium text-sm text-gray-400 px-4 my-4 uppercase'>
							账户管理
						</span>
					</li>
					<li className='my-px'>
						<div
							onClick={() => navgateTo('/profile')}
							className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600  hover:bg-gray-100'
						>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<Person2Outlined />
							</span>
							<span className='ml-3'>个人信息</span>
						</div>
					</li>
					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<NotificationsOutlined />
							</span>
							<span className='ml-3'>站内信息</span>
							<span className='flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto'>
								10
							</span>
						</div>
					</li>
					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-gray-400'>
								<SettingOutlined />
							</span>
							<span className='ml-3'>设置</span>
						</div>
					</li>
					<li className='my-px'>
						<div className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'>
							<span className='flex items-center justify-center text-lg text-red-400'>
								<LockPersonOutlined color='error' />
							</span>
							<span
								className='ml-3 cursor-pointer'
								role='button'
								tabIndex={-1}
								onKeyDown={accountLogout}
								onClick={accountLogout}
							>
								退出
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

interface NavProps {
	id?: string;
	showUp: boolean;
	submenu: string;
	children?: React.ReactNode;
}

const Nav = memo(({ id, showUp, submenu, children }: NavProps) => {
	return (
		<nav
			className={`dropdown-list w-dropdown-list w--open ${
				showUp ? 'active' : ''
			} `}
		>
			<div className='menu-grid-wrapper'>
				<div className='w-layout-grid menu-grid'>
					{submenu === 'submenu1' ? (
						<SubMenu1 />
					) : submenu === 'submenu2' ? (
						<SubMenu2 />
					) : submenu === 'loginform' ? (
						<LoginForm />
					) : (
						children
					)}
				</div>
			</div>
		</nav>
	);
});

export default Nav;
