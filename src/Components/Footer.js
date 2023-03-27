import React from 'react'
import { SvgEmail, SvgInstagramIcon, SvgMobile, SvgTwitterIcon } from './SvgNew'

const Footer = () => {
  const d = new Date()
  const date = d.getFullYear()
  return (
    <div className="footer_wrapper" >
      <div className='footer_content'>
        <p>@ Gyanish {date}. &#169; ALL RIGHTS RESERVED.</p>
      </div>
      <div className='footer_social_icn'>
        <ul>
          <li><a href="mailto:srivastavagyanish@gmail.com" target="_blank" rel="noopener noreferrer"><SvgEmail /></a></li>
          <li><a href='https://www.twitter.com/srivastavgyani1' target="_blank" rel="noopener noreferrer"><SvgTwitterIcon /></a></li>
          <li><a href="tel:7784855635" target="_blank" rel="noopener noreferrer"><SvgMobile /></a></li>
          <li><a href="https://www.instagram.com/gyanishd" target="_blank" rel="noopener noreferrer"><SvgInstagramIcon /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
