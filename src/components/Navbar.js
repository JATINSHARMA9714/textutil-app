import React from 'react'
import '../App.css';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.color==='DarkMode'?'white':'dark'} bg-${props.color==='DarkMode'?'light':'dark'}`}>
  <div className="container-fluid">
    <div className="container">
    <a className="navbar-brand" href="/" style={{fontSize:'35px'}}>{props.name}</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"onClick={props.func}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" style={{color: props.color==='DarkMode'?'black':'white'}}>DarkMode</label>
</div>
</nav>
  )
}
