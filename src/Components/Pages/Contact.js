import React from 'react'
import { Link } from 'react-router-dom'
import { SvgContactIcon, SvgPhoneIcon1 } from '../SvgNew'

const Contact = () => {
  return (
    <div className='contact_form'>
      <h3>CONTACT INFORMATION</h3>
      <div className='card_wrapper'>
        <div className='card_item'>
          <span>.01</span>
          <div className='card_cont'>
            <div className=''>
              <SvgContactIcon />
            </div>
            <div>
              <h4>My Emails</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <Link href="mailto" class="card-link">yourmail@domain.com</Link>
            </div>
          </div>
        </div>
        <div className='card_item'>
          <span>.02</span>
          <div className='card_cont'>
            <div className=''>
              <SvgPhoneIcon1 />
            </div>
            <div>
              <h4>My Phones</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <Link href="tel:1234546789" class="card-link">1234546789</Link>
            </div>
          </div>
        </div>
      </div>
      <form className='contact_form' action="/action_page.php">
        <h3>WRITE ME MESAGGE</h3>
        <div className='field_wrapper'>
          <div className='field_item'>
            <input autocomplete="false" type="text" placeholder="Enter Name" name="name" id="name" required />
          </div>
          <div className='field_item'>
            <input autocomplete="false" type="text" placeholder="Enter Email" name="email" id="email" required />
          </div>
          <div className='field_item'>
            <input autocomplete="false" type="text" placeholder="Enter Phone No" name="Phone No" id="phone" required />
          </div>
          <div className='field_item'>
            <textarea name="comments" id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
          </div>
          <div className='field_item'>
            <button type='submit' id="submit"> <span>Send Message</span></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
