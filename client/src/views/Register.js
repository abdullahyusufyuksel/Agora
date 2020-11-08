import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Register.css'

export default function Register() {
  return (
    <div className="register">
        <Form className = "registerForm">
            <h1 className="text-center">
                <span classname="font-weight-bold">
                    Agora
                </span>
            </h1>
            <Form.Group>
                <Form.Label>
                    First Name
                </Form.Label>
                <Form.Control/>
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Last Name
                </Form.Label>
                <Form.Control/>
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control placeholder="Enter a Username"/>
            </Form.Group>
            
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
            
            <Button>
                Sign Up
            </Button>
        </Form>
    </div>
  );
}