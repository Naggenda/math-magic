import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

function Navbar () {
    return(
        <div className="nav-sect">
           <div className="logo-sect">
              <span>Math Magicians</span>
           </div>
           <div className="nav-links">
           
              <ul>
                 <li><Link to="/"> Home </Link></li>
                 <li><Link to="/Calculator"> Calculator </Link></li>
                 <li><Link to="/Quote"> Quote </Link></li>
              </ul>
              
           </div>
        </div>
    )
}
export default Navbar;