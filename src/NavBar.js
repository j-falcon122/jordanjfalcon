import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from './jf-logo.svg';
import './NavBar.css';
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'

class NavBar extends Component {
  render() {
    return (
        <div className="NavBar"> 
          <div className="NavBar-container"> 
            <Link to={"/Bio"}><img src={logo} className="Nav-loading-logo" alt="logo" /></Link>

            <ul>
                <li><Link to={"/Bio"} className="Nav-list-item">Bio</Link></li>
                <li><Link to={"/Projects"} className="Nav-list-item">Projects</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default NavBar;
  
