import React from 'react'
import logo from '../../assets/logo.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import tweet from '../../assets/tweet.svg'
import linkedin from '../../assets/linkedin.svg'
import snd from '../../assets/snd.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div id="footer-main">
            <div className="footer-inner">
                <div className="section-1 column">
                    <div className='footer-logo'>
                        <img src={''} alt="logo" />
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at neque facilisis mi fusce. Leo accumsan at dolor a, at amet. In adipiscing urna proin vestibulum scelerisque. Nisi magna turpis sit in. Pellentesque nisl tortor, in ac. Aliquet gravida tincidunt maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. </p>
                    <p className='copyright'>© Demo Repair 2021. All rights reserved.</p>

                </div>
                <div>
                    <ul className="section-2 column">
                        <li> <a href="/">Create Account</a>
                        </li>
                        <li> <a href="/customer-device">Device Info</a> </li>
                        <li> <a href="repair-info">Repair Info</a> </li>
                    </ul>
                </div>
                {/* <div>
                    <ul className="section-3 column">
                        <li> <a href="#">Services</a>
                        </li>
                        <li> <a href="#">Pricing</a>  </li>
                        <li> <a href="#">Contact</a> </li>
                        <li> <a href="#">Privacy policy & Cookies</a> </li>
                    </ul>
                </div> */}
                <div className="section-4 column">
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
    )
}

export default Footer
