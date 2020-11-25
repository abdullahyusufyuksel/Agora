import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Login.css'
export default class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    click(){
        window.location = "/";
    }
    clickRegister(){
        window.location = "/register";
    }
    render(){
        return (
            <div className="login">
                <Form className = "loginForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Agora
                        </span>
                    </h1>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter e-mail address" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type ="password" placeholder="Password" />
                    </Form.Group>
                    <div class="button-right">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <Button onClick={this.click}>
                                Log in
                            </Button>
                        </div>
                        <div class="btn-group mr-2" role="group" aria-label="Second group">
                            <Button onClick={this.clickRegister}>
                                Register
                            </Button>
                        </div>
                    </div>
                    </div>

                </Form>
            </div>
        );
    }
}