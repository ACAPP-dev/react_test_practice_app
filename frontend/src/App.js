import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Result from './components/Result'
import TestContainer from './containers/TestContainer'


// convert to class based component and add state for user

export default class App extends React.Component {

  

  state = {
    username: "",
    name: "",
    loggedIn: false,
    results: [],
    redirect: null
  }

  handleLogin = (userData) => {
    this.setState({
      username: userData.username,
      name: userData.name,
      loggedIn: true,
      results: userData.results,
      redirect: "/test"
    })
  }

  handleLogout = () => {
    this.setState({
      username: "",
      name: "",
      loggedIn: false,
      results: [],
      redirect: null
    })
}

  render() {
   
    return ( 
      <div>
        
        <Router>
          <div>
            <NavBar returnLogout={this.handleLogout} loggedIn={this.state.loggedIn} name={this.state.name} />
            
            <Route exact path="/">
              {this.state.redirect ? <Redirect to={this.state.redirect} /> : <Home />}
            </Route>
            <Route exact path="/login" render={routerProps => <Login {...routerProps} returnLogin={this.handleLogin} />} />
            <Route exact path="/test"  render={routerProps => <TestContainer {...routerProps} user={this.state} />} />
            <Route exact path="/results" user={this.state} component={Result} />
          </div>

        </Router>
      </div>
    );

  }
}

