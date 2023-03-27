import React from 'react'
import { NavLink } from 'react-router-dom'
import autherimg from './images/auther-img.jpg'
import './style.css'
import { SvgBlogIcon, SvgContactIcon, SvgHomeIocn, SvgPageIcon, SvgPortfolioIcon, SvgResumeIcon1 } from './SvgNew'
const LeftSidebar = () => {
    const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
    return (
        <div className='sidebar_wrapper'>
            <div className='auther_details'>
                <div className='auther_name'>
                    <h2>GYANISH SHRIVASTAVA</h2>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className='auther_wrapper'>
                <div className='auther_img'>
                    <img src={autherimg} alt="auther-img" />
                </div>
                <div className='plus_icon'>
                    <span>+</span>
                </div>
            </div>
            <div className='verticla_menu'>
                <ul>
                    <li><NavLink to="/" className={classNameFunc}><span><SvgHomeIocn /></span>Home</NavLink></li>
                    <li><NavLink to="/resume" className={classNameFunc}><span><SvgResumeIcon1 /></span>Resume</NavLink></li>
                    <li><NavLink to="/portfolio" className={classNameFunc}><span><SvgPortfolioIcon /></span>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className={classNameFunc}><span><SvgContactIcon /></span>Contacts</NavLink></li>
                    <li><NavLink to="/blog" className={classNameFunc}><span><SvgBlogIcon /></span>Blog</NavLink></li>
                    <li><NavLink to="/page" className={classNameFunc}><span><SvgPageIcon /></span>Page</NavLink></li>
                </ul >
            </div >
            <div className='cv_button'>
                <button>Download CV</button>
            </div>
        </div >
    )
}

export default LeftSidebar
