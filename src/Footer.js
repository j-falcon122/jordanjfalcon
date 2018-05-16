import React, { Component } from 'react';
import logo from './jf-logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer"> 
        <ul className="Footer-assets">
          <li><a href="https://www.linkedin.com/in/jordanfalcon/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true" id="nav-link"></i></a></li>
          <li><a href="https://github.com/j-falcon122" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" aria-hidden="true" id="nav-link"></i></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf" aria-hidden="true" id="nav-link"></i></a></li>
          <li><a href="mailto:j.j-falcon122@gmail.com"><i className="far fa-envelope" aria-hidden="true" id="nav-link"></i></a></li>
          </ul>
      </div>
    );
  }
}

export default Footer;
  
