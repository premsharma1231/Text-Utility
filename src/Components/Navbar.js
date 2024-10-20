import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){


    return (
        <nav style={{position: 'sticky', top:'0px', paddingLeft:'20px'}} className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
     <a className="navbar-brand" style={{fontWeight: '600', fontSize:'25px'}} href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Text-Utility/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
        <input onClick={props.ToggleMode} className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" id="DarkModeTextItis" for="flexSwitchCheckDefault">Enable Darkmode</label>
      </div>
    </div>
  </div>
</nav>
)}