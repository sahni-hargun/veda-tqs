import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png';

class Navbar extends Component{
	render(){
		return(
<nav collapseOnSelect  className="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Veda-The Quiz Society<img src={logo} height="40px" alt="logo" style={{marginLeft: '10px'}}/></span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <center>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-link">
          <Link to="/" style={{ color: 'black' , textDecoration:'none'}}>
           <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</span>
          </Link>
        </li>
        <li class="nav-link">
         <Link to="/practice" style={{ color: 'black' , textDecoration:'none'}}>
          <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Recent Quizzes</span>
         </Link>
        </li>
        <li class="nav-link">
         <Link to="/member" style={{ color: 'black' , textDecoration:'none'}}>
          <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Members</span>
         </Link>
        </li>
        <li class="nav-link">
         <Link to="/alumini" style={{ color: 'black' , textDecoration:'none'}}>
          <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Alumini</span>
         </Link>
        </li>
        <li class="nav-link">
         <Link to="/joinus" style={{ color: 'black' , textDecoration:'none'}}>
          <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Join Us</span>
         </Link>
        </li>
      </ul>
     </center> 
    </div>
  </div>
</nav>
		);
	}
}

export default Navbar;