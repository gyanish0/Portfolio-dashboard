import React from 'react'
import { Link } from 'react-router-dom'
import Vimg from '../images/main-img.jpg'
import ServicesData from './ServicesData'
import ServicesItem from './ServicesItme'
import Tesitimonial from './Tesitimonial'
import TestiData from './TestiData'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'

const HomePage = () => {
  return (
    <div className='home_wrapper'>
      <div className='v_content_w'>
        <div className='v_img'>
          <img src={Vimg} alt="v-img" />
        </div>
        <div className='v-content'>
          <span>Web Design</span>
          <h2>WELCOME TO MY PORTFOLIO</h2>
        </div>
      </div>
      <div className='services_wrapper'>
        <h2>SERVICES THAT I PROVIDE</h2>
        <div className='services_item_W'>
          {
            ServicesItem.map((val, ind) => {
              return (
                <ServicesData
                  key={ind}
                  Name={val.Name}
                  Description={val.Description}
                />
              )
            }
            )}
        </div>
      </div>
      <div className='testi_wrapper'>
        <h2>SERVICES THAT I PROVIDE</h2>
        <div className='testi_item_W'>
          {
            TestiData.map((val, ind) => {
              return (
                <Tesitimonial
                  key={ind}
                  Name={val.Name}
                  description={val.description}
                  imagsrc={val.imagsrc}
                />
              )
            })
          }
        </div>
      </div>
      <div className='client_list'>
        <ul>
          <li><Link><img src={logo1} alt='h2' /></Link></li>
          <li><Link><img src={logo2} alt='h2' /></Link></li>
          <li><Link><img src={logo3} alt='h2' /></Link></li>
          <li><Link><img src={logo4} alt='h2' /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
