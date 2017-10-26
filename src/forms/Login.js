import React, { Component } from 'react';
import './Login.css';
import { FormGroup, Col, Form, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Text field value is: ' + this.state.login + this.state.password);
    }


    render() {
        return (
            <div className="Login">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Логин
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" placeholder="Логин" value={this.state.login} onChange={this.handleChangeLogin} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Пароль
                        </Col>
                        <Col sm={4}>
                            <FormControl type="password" placeholder="Пароль" value={this.state.password} onChange={this.handleChangePassword} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={2}>
                            <Button type="submit">
                                Войти
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;