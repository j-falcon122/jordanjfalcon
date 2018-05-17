import React, { Component } from 'react';
import profile from './Profile-pic.jpg';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <div className="Bio-container flex-container ">
            <div className=""> 
                <img src={profile} className="Bio-profile-pic" alt="logo" />
            </div>
            <div className="">
                <div className="Bio-content">
                    <h1 className="Bio-name">Jordan Falcon</h1>
                    <h3>Experience</h3>
                        <ul className="Bio-experience">
                            <li>
                                <h4><a href="http://gestalt.io/" target="_blank">Gesatalt</a> - Web Develiper Intern</h4>
                                <h5></h5>
                            </li>
                            <li>
                                <h4><a href="https://www.nytimes.com/" target="_blank">New York Times</a> - Web Develiper Intern</h4>
                                <h5></h5>
                            </li>
                        </ul>
                    <h3>Education</h3>
                        <ul className="Bio-education">
                            <li> 
                                <h4><a href="http://lehman.edu/" target="_blank">Lehman College</a> - June 2016 - Present</h4>
                                <h5>Computer Sceince - Bachelors Sceince - Senior</h5>
                            </li>  
                            <li> 
                                <h4><a href="https://flatironschool.com/" target="_blank">The Flatiron School</a> January 2015 - June 2015</h4>
                                <h5>Web immersive program - Graduated</h5>
                            </li>  
                        </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Bio;
