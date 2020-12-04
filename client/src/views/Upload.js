import React from "react";
import { Button, Form, FormGroup } from 'react-bootstrap';
import './Upload.css'


export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            file: null,
            rows: []
        }

        this.handleImage = this.handleImage.bind(this);

    }
    click(){
        window.location = "/";
    }
    handleImage(event) {
        if (event.target.files[0] != null) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
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
      handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
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
                        <Form.Control placeholder="Enter a title for the post." />
                    </Form.Group>
                    <Form.Group>
                        <input type="file" onChange={this.handleImage}/>
                        <img class = "image" src={this.state.file}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter a statement about the image." />
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
                                name="source"
                                value={this.state.rows[idx].source}
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

