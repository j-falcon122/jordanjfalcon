import React, { Component } from 'react';
import logo from './jf-logo.svg';
import './App.css';
import NavBar from './NavBar'


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
         <img src={logo} className="App-loading-logo" alt="logo" />
         <div className="App-logo-shadow"></div>
      </div>


    );
  }
}

export default App;
