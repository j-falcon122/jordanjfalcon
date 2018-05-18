import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './jf-logo.svg';
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'


class App extends Component {
  render() {
    return (

      <Router> 

        <div className="App">
          <header className="App-header">
              <NavBar />
          </header>
          <Switch>
            <div className="App-body">
              <Route exact path="/" component={Bio}/>
              <Route path="/Bio" component={Bio}/>
              <Route path="/Projects" component={Projects}/>
            </div>
          </Switch>
          <Footer />
        </div>

      </Router>
    );
  }
}

export default App;
