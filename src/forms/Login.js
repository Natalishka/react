import React, { Component } from 'react';
import './Login.css';
import { FormGroup, Col, Form, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            loginEmpty: false,
            passEmpty: false,
            loginError: false
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(e) {
        this.setState({
            login: e.target.value,
            loginEmpty: !e.target.value
        });
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value,
            passEmpty: !e.target.value
        });
    }

    onLoginFocus = (e) => {
        this.setState({
            loginEmpty: !e.target.value
        })
    }

    onLoginBlur = (e) => {
        this.setState({
            loginEmpty: false
        })
    }

    onPassFocus = (e) => {
        this.setState({
            passEmpty: !e.target.value
        })
    }

    onPassBlur = (e) => {
        this.setState({
            passEmpty: false
        })
    }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.login && this.state.password) {
            if (this.state.login !== 'test') {
                return this.setState({
                    loginError: true
                })
            }
            else {
                this.setState({
                    loginError: false
                })
                alert('Text field value is: ' + this.state.login + this.state.password);
            }
        }
    }


    render(){
        return (
            <div className="Login">
                {
                    this.state.loginError &&
                    <span className="worningMassage">Не верно введен логин или пароль</span>
                }
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Логин
                        </Col>
                        <Col sm={4}>
                            <FormControl 
                                className={this.state.loginEmpty ? 'redBorder' : ''} 
                                type="text" placeholder="Логин" 
                                value={this.state.login} 
                                onBlur={this.onLoginBlur}
                                onFocus={this.onLoginFocus}
                                onChange={this.handleChangeLogin} />
                        </Col>
                        {
                            this.state.loginEmpty &&
                            <span sm={4} className ="redColor">* введите</span>
                        }
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Пароль
                        </Col>
                        <Col sm={4}>
                            <FormControl 
                                type="password" 
                                className={this.state.passEmpty ? 'redBorder' : ''} 
                                placeholder="Пароль" value={this.state.password} 
                                onBlur={this.onPassBlur} 
                                onFocus={this.onPassFocus}
                                onChange={this.handleChangePassword} />
                        </Col>
                        {
                            this.state.passEmpty &&
                            <span sm={4} className ="redColor">* введите</span>
                        }
                    </FormGroup>
                    <FormGroup>

                        <Col smOffset={2} sm={2}>
                            <Button
                                type="submit"
                                disabled={!((/^[a-zA-Z]+$/.test(this.state.login)) && (/^[a-z0-9A-Z]+$/.test(this.state.password)))}>
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