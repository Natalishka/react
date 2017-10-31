import React, { Component } from 'react';
import logo from './../logo.svg';
import './Header.css';
import { BrowserRouter, withRouter } from 'react-router-dom';

const Header = (props) => {
    const auth = localStorage.getItem('auth');

    const logout = () => {
        localStorage.removeItem('auth');
        props.history.replace('/')
    }

    return (
        <div className="Header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {
                    !!auth &&
                    <input type="button" value="logout" onClick={() => logout()} />
                }
            </header>
        </div>
    )
}

export default withRouter(Header);
