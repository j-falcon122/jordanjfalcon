import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
import Bio from './Bio'
import Projects from './Projects'


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
              <Redirect from="/" to="/Bio" />
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
