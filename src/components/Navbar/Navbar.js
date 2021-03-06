import React,{useState} from 'react';
import {
  Link,useHistory
} from "react-router-dom";
const Navbar = () => {
  const [show,setShow]=useState(false);

const history=useHistory()
  const handleLogout=()=>{
    localStorage.removeItem('user');
    history.push('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={JSON.parse(window.localStorage.getItem('user'))?"/customers-table":'/homepage'}>Demo Repair</Link>
        <button className="navbar-toggler" onClick={()=>setShow((prev)=>!prev)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show?'show':''}`} >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-style">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/customers-table">Customers</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/device-table">Device Infos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="repair-info-table">Repair Infos</Link>
            </li>
          </ul>
              {/* <Link to='/login'> */}
            {/* <button className="btn btn-success me-4" type="submit">Profile</button> */}
              {/* </Link> */}
              
              <button className='btn btn-danger' onClick={()=>handleLogout()}>Logout</button>
          

        </div>
      </div>
    </nav>
  )
};

export default Navbar;

