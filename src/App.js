import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './forms/Login';





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
