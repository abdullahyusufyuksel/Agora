import React from "react";
import FormData from 'form-data';
import { Button, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import './Upload.css'


export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            file: null,
            filePath: null,
            description: '',
            rows: []
        }

        this.handleImage = this.handleImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    click(){
        window.location = "/";
    }
    handleImage(event) {
        if (event.target.files[0] != null) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0]),
                filePath: event.target.files[0]
            })
        }
        else{
            this.setState({
                file: null
            })
        }
    }
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
    };
      handleAddRow = () => {
        const item = {
          name: "",
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
    };
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

      onSubmit(e){
        e.preventDefault();
           
        console.log(`Upload: `);
        console.log(`Title: ${this.state.title}`);
        console.log(`file: ${this.state.filePath}`);
        console.log(`description: ${this.state.description}`);
        for (let i = 0; i < this.state.rows.length; i++){
            console.log(`rows: ${this.state.rows[i].rows}`);
        }

        let temp = new FormData();
        temp.append('title', this.state.title);
        temp.append('image', this.state.filePath, this.state.filePath.fileName);
        temp.append('message', this.state.description);
        for (let i = 0; i < this.state.rows.length; i++){
            temp.append('sources', this.state.rows[i].rows);
        }

        let config = {
            headers : {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${temp._boundary}`,
                "Authorization": this.props.currentUser.data.token
            }
        }
        
        var data = {
            title: this.state.title,
            image: this.state.filePath,
            message: this.state.description,
            sources: this.state.rows
          };

        axios.post('http://localhost:5000/upload', temp, config)
            .then(res => {
                console.log(res.data)
            })

        this.setState({
            title: '',
            file: null,
            filePath: null, 
            description: '',
            rows: []
        })

        // window.location = "/login";
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
                        <Form.Label>
                            Title
                        </Form.Label>
                        <Form.Control name = "title" value={this.state.title} onChange={e => this.onChange(e)} placeholder="Enter a title for the post." />
                    </Form.Group>
                    <Form.Group>
                        <input type="file" onChange={this.handleImage}/>
                        <img class = "image" src={this.state.file}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control name = "description" value={this.state.description} as="textarea" rows={3} onChange={e => this.onChange(e)} placeholder="Enter a statement about the image." />
                    </Form.Group>
                    
                </Form>
                <div className="uploadForm">
                <div className="row clearfix">
                    <div className="col-md-12 column">
                    <table className="table table-bordered table-hover" id="tab_logic">
                        <thead>
                        <tr>
                            <th> Sources </th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.rows.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                            <td>
                                <input
                                type="text"
                                name="rows"
                                value={this.state.rows[idx].rows}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                                />
                            </td>
                            <td>
                                <button className="btn btn-outline-danger btn-sm" onClick={this.handleRemoveSpecificRow(idx)}>
                                Remove
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Button variant="success" onClick={this.handleAddRow} className="btn btn-primary float-right">
                        Add Row
                    </Button>
                    </div>
                </div>
                </div>

                <div class="uploadForm">
                <Button onClick={this.onSubmit}>
                    Submit
                </Button>
                </div>

            </div>
        );
    }
}