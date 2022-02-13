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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active nav-links-spacing" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav-links-spacing" aria-current="page" href="#">TourScienceTest</a>
                        </li>
                        <li className="nav-item nav-links-spacing ">
                            <a className="nav-link active" aria-current="page" href="#">library</a>
                        </li>
                        <li className="nav-item nav-links-spacing">
                            <a className="nav-link active" aria-current="page" href="#">Pricing </a>
                        </li>
                        <li className="nav-item nav-links-spacing">
                            <a className="nav-link active" aria-current="page" href="#">Pricing </a>
                        </li>
                        <li className="nav-item nav-links-spacing">
                            <a className="nav-link active" aria-current="page" href="#">Contact </a>
                        </li>
                        <div className="d-flex">
                            <button className="btn bg-primary btn-style me-3" disabled type="submit">Login</button>
                            <button className="btn signup-btn text-light btn-style" type="submit">Sign Up Free</button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
