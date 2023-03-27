import React from 'react'
import { SvgSeachIocn } from '../SvgNew'
import portimg from '../images/portImg.jpg'
const PortFolioData = ({ protdata }) => {
    return (
        <>
            {protdata.map((curentElement) => {
                return (
                    <div className='port_grid_w' key={curentElement.id}>
                        <div className='port_grid'>
                            <div className='port_img'>
                                <img src={portimg} alt="portfolio-img" />
                            </div>
                            <div className='port_overlay'>
                                <SvgSeachIocn />
                            </div>
                        </div>
                    </div>
                )

            })
            }
        </>
    )
}

export default PortFolioData
