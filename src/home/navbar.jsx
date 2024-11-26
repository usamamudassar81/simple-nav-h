import React from 'react';
import "./home.css";
import logo from "../assets/images/logo.jpeg";

const Navbar = () => {
  return (
    <div>
        <div className='top-nav'>
            <div className='top-1'>
            <li>Location</li>
            <li>usamamudassar998@gmail.com</li>
            </div>
            
            <div className='top-2'>
            <li>03087852247</li>
            <li>530GB Narangwal</li>
            </div>
            
        </div>
     <nav className='nav-main'>
        <div>
            <img src={logo} width="50px" height="25px" alt="this is images" />
        </div>
        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            
        </ul>
        <div>
        <button className='btn-n'>Contact US</button>
        </div>
     </nav>
    </div>
  )
}

export default Navbar;
