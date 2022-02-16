import React from 'react';
import {
  Link, useHistory
} from "react-router-dom";

const DummyNavbar = () => {
  const history = useHistory();
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* {
          JSON.parse(window.localStorage.getItem('user'))?
          <Link className="navbar-brand" to="/create-customer">Demo Repair</Link>:<Link className="navbar-brand" to="/homepage">Demo Repair</Link>
            
        } */}
        <Link className="navbar-brand" to="/homepage">Demo Repair</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-style">
            {/* <li className="nav-item me-5">
              <a href='#' className="nav-link active" aria-current="page">Home</a>
            </li>
            <li href='#' className="nav-item me-5">
              <a className="nav-link active" aria-current="page">About</a>
            </li>
            <li href='#' className="nav-item">
              <a className="nav-link active" aria-current="page" >Contact Us</a>
            </li> */}
          </ul>
          <Link to='/login'>
            <button className="btn btn-success me-3" type="submit">Login</button>
          </Link>
          <Link >
            {/* <button className="btn btn-danger me-2" type="submit">Register</button> */}
          </Link>




        </div>
      </div>
    </nav>
  )
};

export default DummyNavbar;

