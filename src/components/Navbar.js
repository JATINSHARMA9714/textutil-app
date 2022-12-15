import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import '../App.css';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.color==='DarkMode'?'white':'dark'} bg-${props.color==='DarkMode'?'light':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${props.activity1} ${props.function}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.activity2}} ${props.function}`} to="/about">About</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"onClick={props.func}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" style={{color: props.color==='DarkMode'?'black':'white'}}>DarkMode</label>
</div>
</nav>
  )
}
