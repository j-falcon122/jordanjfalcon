import React, { Component } from 'react';
import logo from './jf-logo.svg';
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
import Bio from './Bio'


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-body">
          {/* 
          <img src={logo} className="App-loading-logo" alt="logo" />
          <div className="App-logo-shadow"></div>
          <p className="App-loading">Loading... </p>
          A JSX comment */}
          
          <Bio />
        </div>
        <Footer />
      </div>


    );
  }
}

export default App;
