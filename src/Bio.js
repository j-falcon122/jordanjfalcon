import React, { Component } from 'react';
import profile from './Profile-pic.jpg';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <div className="Bio-container flex-container ">
            <div className="Bio-profile-pic">
                <img src={profile} alt="logo" />
            </div>
            <div className="Bio-content">
                <h1 className="Bio-name">Jordan Falcon</h1>
                <h3>Experience</h3>
                <ul className="Bio-experience">
                    <li>
                        <h4><a href="https://ehtp.org/" target="_blank" title="EHTP" alt="EHTP">EHTP</a> - Data Corps Intern (September-Current)</h4>
                    </li>
                    <li>
                        <h4><a href="http://www.espn.com/" target="_blank" title="Gesatalt" alt="ESPN">ESPN</a> - Front End Software Engineer Intern (Summer 2018)</h4>
                    </li>
                    <li>
                        <h4><a href="http://gestalt.io/" target="_blank" title="Gesatalt" alt="Gestalt">Gestalt</a> - Web Developer (October-November 2017)</h4>
                    </li>
                    <li>
                        <h4><a href="http://gestalt.io/" target="_blank" title="Gesatalt" alt="Gestalt">Gestalt</a> - Web Developer Intern (Summer 2017) </h4>
                    </li>
                    <li>
                        <h4><a href="https://www.nytimes.com/" target="_blank" title="New York Times" alt="New York Times">New York Times</a> - Web Developer Intern (Summer 2015)</h4>
                    </li>
                </ul>
                <h3>Education</h3>
                <ul className="Bio-education">
                    <li> 
                        <h4><a href="http://lehman.edu/" target="_blank" alt="Lehamn College" title="Lehamn College">Lehman College</a> (June 2016 - Present)</h4>
                        <h5>Computer Science - Bachelors Science - Senior</h5>
                    </li>  
                    <li> 
                        <h4><a href="https://flatironschool.com/" target="_blank" alt="The Flatiron School" title="The Flatiron School">The Flatiron School</a>  (January 2015 - June 2015)</h4>
                        <h5>Web immersive program - Graduated</h5>
                    </li>  
                </ul>
                <h3>Activities</h3>
                <div className="Bio-activities">
                    <a href="https://codeinteractive.org/accelerator/" target="_blank">TCAP</a>
                    <a href="https://www.nsbe.org/home.aspx" target="_blank">NSBE</a>
                    <a href="https://www.meetup.com/GDG-Bronx/events/229682822" target="_blank">Traincube</a>
                    <a href="http://www1.cuny.edu/sites/servicecorps/" target="_blank">CUNY Service Corps</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Bio;
