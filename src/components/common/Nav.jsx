import { Link } from 'gatsby';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import '../../styles/components/_nav-component.scss';
import { debugLog, getAxios } from '../../utils/tools';

const axoisInstance = getAxios();

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
                        <Link to="版权申明"
                            className="mega-menu-link" >Individual Teacher</Link>
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
        const response = await axoisInstance.get(url);
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


const Nav = ({ showUp, submenu, children }) => {


    return (
        <nav className={`dropdown-list w-dropdown-list w--open ${showUp ? 'active' : ''} `} >
            <div className="menu-grid-wrapper">
                <div className="w-layout-grid menu-grid">
                    {
                        submenu === 'submenu1' ? <SubMenu1 /> :
                            submenu === 'submenu2' ? <SubMenu2 /> : children
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav