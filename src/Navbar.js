import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png';

class Navbar extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
             <span className="navbar-brand">Veda-The Quiz Society<img src={logo} height="40px" style={{marginLeft: '10px'}}/></span>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <center>
              <div className="navbar-nav">
               <li className="nav-link">
                <Link to="/" data-toggle="collapse" data-target=".navbar-collapse" style={{ color: 'black' }}>Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/practice" data-toggle="collapse" data-target=".navbar-collapse" style={{ color: 'black' }}>Recent Quizzes</Link>
              </li>
              <li className="nav-link">
                <Link to="/member" data-toggle="collapse" data-target=".navbar-collapse" style={{ color: 'black' }}>Members</Link>
              </li>
              <li className="nav-link">
                <Link to="/alumini" data-toggle="collapse" data-target=".navbar-collapse" style={{ color: 'black' }}>Alumini</Link>
              </li>
              <li className="nav-link">
                <Link to="/joinus" data-toggle="collapse" data-target=".navbar-collapse" style={{ color: 'black' }}>Join Us</Link>
              </li>
              </div>
              </center>
             </div>
            </nav>
		);
	}
}

export default Navbar;