import React, { useState } from 'react'
import PortFolioData from './PortFolioData'
import PortfolioApi from '../Pages/PortFolioApi'
const Portfolio = () => {
  const [protdata, setPortData] = useState(PortfolioApi);
  const filterItem = (category) => {
    const updatedList = PortfolioApi.filter((curentElement) => {
      return curentElement.category === category;
    });
    setPortData(updatedList)
  }
  return (
    <div className='portfolio_wrapper'>
      <div className='port_w'>
        <div className='port_title'>
          <h3>PORTFOLIO</h3>
        </div>
        <div className='port_tav'>
          <ul>
            <li className='active'>
              <button onClick={() => setPortData(PortfolioApi)}>All</button>
            </li>
            <li>
              <button onClick={() => filterItem("Web Design")}>Web Design</button>
            </li>
            <li>
              <button onClick={() => filterItem("Photo")}>Photo</button>
            </li>
            <li>
              <button onClick={() => filterItem("Branding")}>Branding</button>
            </li>
            <li>
              <button onClick={() => filterItem("Ui Design")}>Ui Design</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='port_tab'>
        <PortFolioData protdata={protdata} />
      </div>
    </div>
  )
}

export default Portfolio
