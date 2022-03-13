import React from 'react'
import './Header.css'
import Navbar from '../../../components/Navbar/DummyNavbar'
const Header = () => {
    return (
        <div id="hero-main">
            <Navbar />
            <div className="hero-container">
                <div>
                    <div className='hero-title-length'>

                        <p className='hero-title'> We’ll Repair Your IPhone, IPad Or Galaxy Wherever And Whenever You Want. Seriously.</p>
                    </div>
                    <p className='hero-sub hero-sub-length'> </p>
                    <div className="hero-btn-main">
                        <button className="hero-btn-touch" type="submit">Get In touch now</button>
                        <button className="hero-btn-watch" disabled type="submit">Watch Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
