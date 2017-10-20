import React, { Component } from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/lib/Button';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Text field value is: ' + this.state.value);
    }


    render() {
        return (
            <div className="Login">
                <label>Логин</label>
                <input type="text" placeholder="Логин" value={this.state.value} onChange={this.handleChange} />
                <label>Пароль</label>
                <input type="text" placeholder="Пароль" value={this.state.value} onChange={this.handleChange} />
                <button bsStyle="primary" bsSize="large" onClick={this.handleSubmit}>Войти </button>

                <Button bsStyle="primary" bsSize="large">Large button</Button>
                <Button bsSize="large">Large button</Button>
            </div>
        );
    }
}

export default Login;