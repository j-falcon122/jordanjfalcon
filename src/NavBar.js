import React, { Component } from 'react';
import logo from './jf-logo.svg';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar"> 
      <img src={logo} className="Nav-loading-logo" alt="logo" />

        <ul>
            <li><a className="Nav-list-item">Bio</a></li>
            <li><a className="Nav-list-item">Projects</a></li>
            <li><a className="Nav-list-item">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
  
