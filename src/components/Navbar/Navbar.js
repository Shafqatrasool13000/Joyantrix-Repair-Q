import React from 'react';
import {
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Demo Repair</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-style">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/">Create Customer</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/customer-device">Device Info</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/repair-info">Repair Info</Link>
            </li>
          </ul>
              <Link to='/login'>
            <button className="btn btn-success me-2" type="submit">Login</button>
              </Link>
          

        </div>
      </div>
    </nav>
  )
};

export default Navbar;

