import { Link } from 'gatsby';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAxios } from '../../utils/tools';
import { Avatar } from '@mui/material';

import sophie from '../../assets/img/courses/sophie-moore.jpg'
import { AssignmentOutlined, EventAvailableOutlined, HouseOutlined, LockOpenOutlined, LockPersonOutlined, LogoutOutlined, NotificationsOutlined, Person2Outlined } from '@mui/icons-material';
import { SettingOutlined } from '@ant-design/icons';
const axiosInstance = getAxios();

const SubMenu1 = () => {
    return (
        <>
            <div>
                <h4 className="mega-menu-title hidden-mobile">页面</h4>
                <div className="menu-2-columns">
                    <div className="mega-menu-column-1">
                        <Link to="/" className="mega-menu-link" >首页</Link>
                        <Link to="/login" className="mega-menu-link" >登录</Link>
                        <Link to="/courses"
                            aria-current="page" className="mega-menu-link w--current" >课程</Link>
                        <Link to="/asciinema-list"
                            aria-current="page" className="mega-menu-link w--current" >字节流视频</Link>
                        <Link to="/about1"
                            className="mega-menu-link" >关于我们</Link>
                        <Link to="/styleguide"
                            className='mega-menu-link'
                        >样式</Link>
                    </div>
                    <div className="mega-menu-column-3">
                        <Link to="/price2" className="mega-menu-link" >收费</Link>
                        <Link to="/changelog"
                            className="mega-menu-link" >历史版本</Link></div>
                    <div className="mega-menu-column-3">
                        <Link to="/copyright"
                            className="mega-menu-link" >版权申明</Link>
                        <Link to="/contact1"
                            className="mega-menu-link" >联系我们</Link></div>
                </div>
            </div>
        </>
    )

}

const SubMenu2 = () => {

    const fetchTop8Courses = async () => {
        let url = `${process.env.GATSBY_API_SERVER}/courses/?limit=8`;
        const response = await axiosInstance.get(url);
        return response.data;
    }


    const { data, isLoading, error } = useQuery({
        queryKey: ["fetch-top-courses", 8],
        queryFn: fetchTop8Courses
    });

    if (isLoading || error) return "加载中Oo."

    const { courses } = data.result;
    return (
        <>
            <div className="mega-menu-column-4">
                <h4 className="mega-menu-title">课程分类</h4>
                {courses.map((course, index) => (
                    <Link key={index}
                        to={`/courses/${course.ID}`} className="mega-menu-link" >
                        {course.name}
                    </Link>
                ))}

                <Link
                    to="/courses" className="mega-menu-link-2 special" >
                    更多大数据云计算系列
                </Link>
            </div>

        </>
    )
}


const LoginForm = () => {

    return (
        <div className="z-[1000] absolute top-16 -right-36 h-fit rounded-xl shadow-xl flex items-center justify-center bg-gray-100 py-6">
            <div className="flex gap-2 flex-col whitespace-nowrap max-w-xs p-4 items-center bg-white">
                <Avatar src={sophie} className="outline-2 w-16 h-16" />
                <ul className="flex flex-col w-full">
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <HouseOutlined />
                            </span>
                            <span className="ml-3">面板</span>
                            <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">3</span>
                        </div>
                    </li>
                    <li className="my-px">
                        <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">学习计划</span>
                    </li>

                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <EventAvailableOutlined />
                            </span>
                            <span className="ml-3">学习进度</span>
                        </div>
                    </li>
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <AssignmentOutlined />
                            </span>
                            <span className="ml-3">历史记录</span>
                            <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">1k</span>
                        </div>
                    </li>
                    {/* <li className="my-px">
                        <a href="#"
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-green-400">
                                <svg fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                            <span className="ml-3">Add new</span>
                        </a>
                    </li> */}
                    <li className="my-px">
                        <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">账户管理</span>
                    </li>
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <Person2Outlined />
                            </span>
                            <span className="ml-3">个人信息</span>
                        </div>
                    </li>
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <NotificationsOutlined />
                            </span>
                            <span className="ml-3">站内信息</span>
                            <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">10</span>
                        </div>
                    </li>
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <SettingOutlined />
                            </span>
                            <span className="ml-3">设置</span>
                        </div>
                    </li>
                    <li className="my-px">
                        <div
                            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                            <span className="flex items-center justify-center text-lg text-red-400">
                                <LockPersonOutlined color="error" />
                            </span>
                            <span className="ml-3">退出账户</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const Nav = ({ showUp, submenu, children }) => {


    return (
        <nav className={`dropdown-list w-dropdown-list w--open ${showUp ? 'active' : ''} `} >
            <div className="menu-grid-wrapper">
                <div className="w-layout-grid menu-grid">
                    {
                        submenu === 'submenu1' ? <SubMenu1 /> :
                            submenu === 'submenu2' ? <SubMenu2 /> :
                                submenu === 'loginform' ? <LoginForm /> : children
                    }
                </div>
            </div>
        </nav>
    )
}



export default Nav