import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SvgHomeIocn, SvgShareIcon } from './SvgNew'

const Header = () => {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <div className='header_wrapper'>
      <div className='header_container'>
        <div className='page_title'>
          <h1><span><SvgHomeIocn /></span>
            {
              location.pathname === '/' ? 'ABOUT ME' : location.pathname === '/blog' ? 'LAST NEWS ' : location.pathname === '/resume' ? "MY STORY" : location.pathname === '/portfolio' ? "MY PORTFOLIO" : location.pathname === '/contact' ? "GET IN TOUCH" : location.pathname === '/page' ? "Page" : ''
            }
          </h1>
        </div>
        <div className='icon_details'>
          <div className='get_btn'>
            <Link to="/"><span><SvgHomeIocn /></span> Get In Touch</Link>
          </div>
          <div className='share_btn'>
            <button>Share<span><SvgShareIcon /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
