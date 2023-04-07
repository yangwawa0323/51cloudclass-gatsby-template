import React from 'react';
import '../../styles/components/_nav-component.scss';


const Nav = ({ showUp }) => {

    return (
        <nav className={`dropdown-list w-dropdown-list w--open ${showUp ? 'active' : ''} `} >
            <div className="menu-grid-wrapper">
                <div className="w-layout-grid menu-grid">
                    <div>
                        <h4 className="mega-menu-title hidden-mobile">Pages</h4>
                        <div className="menu-2-columns">
                            <div className="mega-menu-column-1"><a href="/" className="mega-menu-link" tabIndex="0">Home</a><a
                                href="/about-us" className="mega-menu-link" tabIndex="0">About</a><a href="/courses"
                                    aria-current="page" className="mega-menu-link w--current" tabIndex="0">Courses</a><a
                                        href="https://academytemplate.webflow.io/product/brand-identity-design-for-marketers"
                                        className="mega-menu-link" tabIndex="0">Individual Course</a><a
                                            href="/course/brand-identity-design-for-marketers" className="mega-menu-link"
                                            tabIndex="0">Purchased Course</a></div>
                            <div className="mega-menu-column-3"><a href="/blog" className="mega-menu-link" tabIndex="0">Blog</a><a
                                href="https://academytemplate.webflow.io/post/8-great-design-trends-that-are-coming-back"
                                className="mega-menu-link" tabIndex="0">Blog Post</a><a href="/events" className="mega-menu-link"
                                    tabIndex="0">Events</a><a
                                        href="https://academytemplate.webflow.io/event/brand-identity-design-qa-with-sophie-moore"
                                        className="mega-menu-link" tabIndex="0">Individual Event</a><a href="/teachers"
                                            className="mega-menu-link" tabIndex="0">Teachers</a></div>
                            <div className="mega-menu-column-3"><a href="https://academytemplate.webflow.io/teacher/john-carter"
                                className="mega-menu-link" tabIndex="0">Individual Teacher</a><a href="/contact-us"
                                    className="mega-menu-link" tabIndex="0">Contact</a></div>
                        </div>
                    </div>
                    <div className="mega-menu-column-4">
                        <h4 className="mega-menu-title">Utility Pages</h4><a href="/style-guide" className="mega-menu-link"
                            tabIndex="0">Styleguide</a><a href="https://academytemplate.webflow.io/404" className="mega-menu-link"
                                tabIndex="0">404 Not Found</a><a href="https://academytemplate.webflow.io/401"
                                    className="mega-menu-link" tabIndex="0">Password</a><a href="/licenses" className="mega-menu-link"
                                        tabIndex="0">Licenses</a><a href="/start-here" className="mega-menu-link" tabIndex="0">Start Here</a><a
                                            href="/changelog" className="mega-menu-link" tabIndex="0">Changelog</a><a
                                                href="http://brixtemplates.com/more-templates" className="mega-menu-link-2 special" tabIndex="0">Browse
                            More Templates</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav