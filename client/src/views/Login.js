import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import axios from 'axios';

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            email: '',
            password: ''
        };
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    clickRegister(){
        window.location = "/register";
    }
    onSubmit(e){
        e.preventDefault();
    
        //const { password, email } = this.state;
       
        console.log("Form submitted: ");
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);

        var User = {
            email: this.state.email,
            password: this.state.password
          };

        axios.post('http://localhost:5000/login', User)
        .then(res => {
            this.props.setCurrentUser({token: res.token})
            this.props.setCurrentUser({data: res.data})

            this.setState({
                email: '',
                password: ''
            })
    
        //window.location = "/";    // Erases data for user in the home page for some reason. Need to fix.
        });
    }
    render(){
        return (
            <div className="login">
                <Form className = "loginForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Log In
                        </span>
                    </h1>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control name = "email" value={this.state.email} onChange={e => this.onChange(e)} type="email" placeholder="Enter e-mail address" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control name = "password" value={this.state.password} onChange={e => this.onChange(e)} type ="password" placeholder="Password" />
                    </Form.Group>
                    <div class="button-right">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <Button onClick={this.onSubmit}>
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