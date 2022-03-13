import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  nav-back nav-typography">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt={logo} className='img-fluid' />
                </a>
                <button className="navbar-toggler" onClick={() => setShow(prev => !prev)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? 'nav-collapse' : ''} ${show ? 'show' : ''}`}>
                   
                </div>
            </div>
        </nav>

    )
}

export default Navbar
