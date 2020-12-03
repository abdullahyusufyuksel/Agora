import React from "react";
import { Button, Form, FormGroup } from 'react-bootstrap';
import './Upload.css'


export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            file: null
        }

        this.handleChange = this.handleChange.bind(this)

    }
    click(){
        window.location = "/";
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
    }
    
    render(){
        return (
            <div className="upload">
                <Form className = "uploadForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Upload
                        </span>
                    </h1>
                    <Form.Group>
                        <input type="file" onChange={this.handleChange}/>
                        <img class = "image" src={this.state.file}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Statement
                        </Form.Label>
                        <Form.Control placeholder="Enter a statement about the image." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Sources
                        </Form.Label>
                        <Form.Control placeholder="Enter sources of support or information." />
                        <Button onClick={this.click}>
                                Add Source
                        </Button>
                    </Form.Group>
                    
                    <div class="button-right">
                    <Button onClick={this.click}>
                                Submit
                    </Button>
                    </div>
                    
                </Form>
            </div>
        );
    }
}

