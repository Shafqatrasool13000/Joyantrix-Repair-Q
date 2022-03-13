import React from 'react'
// import logo from '../../assets/logo.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import tweet from '../../assets/tweet.svg'
import linkedin from '../../assets/linkedin.svg'
import snd from '../../assets/snd.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer-main" >
            <div className='container'>
                <div className="row footer-inner justify-content-center align-items-center ">
                    <div className="section-1 col-sm-4">
                        <div className='footer-logo'>
                            <img src={''} alt="logo" />
                        </div>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at neque facilisis mi fusce. Leo accumsan at dolor . </p>
                        <p className='copyright'>© Demo Repair 2021. All rights reserved.</p>

                    </div>
                    <div className='col-sm-3 mt-3'>
                        <ul className="section-2  footer-links">
                            <li> <Link to="#
">Create Customer</Link>
                            </li>
                            <li> <Link to="/device-info">Device Info</Link> </li>
                            <li> <Link to="repair-info">Repair Info</Link> </li>
                        </ul>
                    </div>
                    <div className="section-4 col-sm-4">
                        <div className="footer-icons">
                            <img src={fb} className="footer-icon" alt="instagram" />
                            <img src={insta} className="footer-icon" alt="instagram" />
                            <img src={tweet} className="footer-icon" alt="instagram" />
                            <img src={linkedin} alt="instagram" />
                        </div>
                        <p className='subscribe'>
                            Subscribe our Newsletters to keep  updated yourself with Current Revolution.
                        </p>
                        <div className='email-subscribe'>
                            <div className='position'>
                                <input type="email" className="email-input" id="exampleFormControlInput1" placeholder="Enter your email" />
                                <img className='snd-img' src={snd} alt="snd" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer
