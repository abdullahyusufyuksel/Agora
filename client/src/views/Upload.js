import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Upload.css'


export default class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    click(){
        window.location = "/";
    }
    showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1");
          preview.src = src;
          preview.style.display = "block";
        }
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
                    <div class="center">
                        <div class="form-input">
                            <label for="file-ip-1">Upload Image</label>
                                <input type="file" id="file-ip-1" accept="image/*" onchange="showPreview(event)"/>
                            <div class="preview">
                                <img id="file-ip-1-preview" alt="Preview of upload."/>
                            </div>
                        </div>
                    </div>
                    </Form.Group>
                    <div class="text-center">
                        <Button onClick={this.click}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

