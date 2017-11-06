import React, {Component} from 'react'
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = localStorage.getItem('auth');
    return (
        <Route {...rest} render={props => (
        !!auth ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
            pathname: '/',
            state: { from: props.location }
            }}/>
        )
        )}/>
    )
}

export default PrivateRoute