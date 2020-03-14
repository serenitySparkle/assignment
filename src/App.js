import React, { Component} from 'react'
// import { createStore } from 'redux'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import DataAccess from './components/DataAccess'


class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="App-list">
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </header>
            <Switch>
                  <Route exact path= "/" render={() => (
                    <Redirect to="/signup"/>
                  )}/>
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/dataAccess/:token' component={DataAccess} /> 
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
