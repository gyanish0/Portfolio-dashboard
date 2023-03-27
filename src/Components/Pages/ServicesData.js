import React from 'react'
import { SvgDesktopIcon } from '../SvgNew'

const ServicesData = (props) => {
  return (
    <div className='ser_item'>
    <span>01</span>
    <div className='desk-icon'><SvgDesktopIcon /></div>
    <h3>{props.Name}</h3>
    <p>Praesent nec leo venenatis elit semper aliquet id ac enim.
       Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
        Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .</p>
        <div className='sof_edit'>
          <ul>
            <li>CODE</li>
            <li>DESIGN</li>
            <li>PHOTOSHOP</li>
          </ul>
        </div>
  </div>
  )
}

export default ServicesData
