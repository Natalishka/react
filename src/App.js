import React, { Component } from 'react';
import './App.css';
import Login from './forms/Login';
import Courses from './courses/Courses';
import Header from './header/Header';
import ProtectedRoute from './common/ProtectedRoute'
import { BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter } from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Login}/>
            <ProtectedRoute path="/courses" component={Courses}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
