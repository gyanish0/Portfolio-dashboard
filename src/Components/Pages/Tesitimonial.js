import React from 'react'
import ClintImg from '../images/Client.jpg'
const Tesitimonial = (props) => {
    return (
        <div className='testi_item'>
            <div className='client_title'>
                <span>01</span>
                <h3>{props.Name}</h3>
            </div>
            <div className='client_des'>
                <img src={ClintImg} alt="h2" />
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Tesitimonial
