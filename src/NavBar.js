import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
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
                <li><NavLink to={"/Bio"} className="Nav-list-item Nav-list-item-active">Bio</NavLink></li>
                <li><NavLink to={"/Projects"} className="Nav-list-item" >Projects</NavLink></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default NavBar;
  
