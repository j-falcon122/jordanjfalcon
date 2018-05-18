import React, { Component } from 'react';
import sleepEZ from './imgs/sleepEZ-screenshot.png';
import worldCup from './imgs/worldcup-screenshot.png';
import iammbk from './imgs/iammbk-screenshot.png';
import twork from './imgs/twork-screenshot.png';
import stockoverflow from './imgs/stock-overflow.png';
import corkys from './imgs/corky-diner.png';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
        <div className="Projects-container flex-container">
            <h1>Projects</h1>
            <ul className="Projects-list">
                <li className="Project-1">
                    <figure>
                        <a href="https://sleep-hd.herokuapp.com/" target="_blank"><img src={sleepEZ} alt="Corky's Diner" className="Project-img" />
                        <figcaption>SleepEZ</figcaption>
                        </a>   
                    </figure>
                </li>
                <li className="Project-1">
                    <figure>
                        <a href="https://lehman-webdev.github.io/2018-world-cup-countdown/views/index.html" target="_blank"><img src={worldCup} alt="Corky's Diner" className="Project-img" />
                        <figcaption>Countdown until World Cup</figcaption>
                        </a>   
                    </figure>
                </li>
                <li className="Project-1">
                    <figure>
                        <a href="http://iammbk.org" target="_blank"><img src={iammbk} alt="Corky's Diner" className="Project-img" />
                        <figcaption>MBK Alliance</figcaption>
                        </a>   
                    </figure>
                </li>
                <li className="Project-1">
                    <figure>
                        <a href="https://baconeggcheese-b7736.firebaseapp.com/html/corky-home.html" target="_blank"><img src={corkys} alt="Corky's Diner" className="Project-img" />
                        <figcaption>Corky's Diner</figcaption>
                        </a>   
                    </figure>
                </li>
                <li className="Project-2">
                    <figure>
                        <a href="http://stockoverflow.herokuapp.com/" target="_blank"><img src={stockoverflow} alt="Stock Overflow" className="Project-img" />
                        <figcaption>Stock Overflow</figcaption>
                        </a>
                    </figure>
                </li>
                <li className="Project-3">
                    <figure>
                        <a href="https://flatiron-twork.herokuapp.com" target="_blank"><img src={twork} alt="Twork" className="Project-img" />
                        <figcaption>Twork</figcaption>
                        </a>
                    </figure>
                </li>
            </ul>
        </div>
    );
  }

}


export default Projects;
