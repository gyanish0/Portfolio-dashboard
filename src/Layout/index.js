import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import LeftSidebar from '../Components/LeftSidebar'
import Footer from '../Components/Footer'
const HomeLayout = () => {
    return (
        <div className='main_body'>
            <div className='main-container'>
                <div className='grid_wrapper'>
                    <LeftSidebar />
                    <div className='main_content'>
                        <Header />
                        <div className='content_wrapper'>
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
