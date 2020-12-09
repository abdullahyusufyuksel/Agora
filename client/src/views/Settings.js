
import { ListGroup, Container, Row, Col, Image, Card, CardDeck, Button, Form, FormControl } from 'react-bootstrap';
import { React, Component } from "react";
//import { Button, Form } from 'react-bootstrap';
import './Settings.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class Settings extends Component{
    constructor(props) {
        super(props);
        
        this.changePassword = this.changePassword.bind(this);
        this.savebio = this.savebio.bind(this);
        

        this.state = { 
            currentUser : null,
            password: this.props.currentUser.password,
            biography: this.props.currentUser.biography
        }; 
    } 

    changePassword = (e) => {
        e.preventDefault();
        console.log(this.props)
        //const {currentUser} = this.props.currentUser;
        //const { username, password, firstName, lastName, email } = this.state;

        console.log(this.state.currentUser)
        

        var password = {
            password: this.state.password,
          };
        let config = {
            headers : {
                "Authorization": this.state.currentUser.data.token}
        }
        axios.post('http://localhost:5000/settings/changePassword', password, config)
            .then(res => {
                this.state.resultMessage = 'Password Updated'
            });
        
        this.setState({
            password: ''
        })
     }

    savebio = (e) => {
        e.preventDefault();
        console.log(this.props)
        //const {currentUser} = this.props.currentUser;
        //const { username, password, firstName, lastName, email } = this.state;

        console.log(this.state.currentUser)
        

        var bio = {
            bio: this.state.biography,
          };
        let config = {
            headers : {
                "Authorization": this.state.currentUser.data.token}
        }
        axios.post('http://localhost:5000/settings/changeBio', bio, config)
            .then(res => {
                //put if success/fail
                this.state.resultMessage = 'Bio Updated'
            });
        
        this.setState({
            bio: 'james kaiser'
        })
        console.log(this.state.biography)
        //window.location = "http://localhost:5000/settings/:changeBio";
     }

    componentDidMount(){ 
        this.setState({currentUser : this.props.currentUser})
        console.log(this.props)
      }
    render(){
        return (
            <div className="Settings">
                <Form className = "SettingsForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Settings
                        </span>
                    </h1>
                    <Row className = "row">
                            <Col className = "sentence">
                                <div>Change Profile Picture</div>
                                
                            </Col>
                            <Col>
                                <Button onClick={this.savebio}>
                                     Change Profile Picture
                                </Button>
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Change Bio
                                </Form.Label>
                                <FormControl 
                                name = "biography" 
                                value={this.state.biography} 
                                savebio={e => this.savebio(e)}
                                onChange={(e) => this.setState({ biography: e.target.value })}
                                placeholder="Enter your new bio" 
                                />
                                
                            </Form.Group>
                        </Col>
                        <Col className = "test">
                            <Button onClick={this.savebio}>
                            Change Bio
                            </Button>
                        </Col>
                    </Row>    
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Change Password
                                </Form.Label>
                                <Form.Control name = "password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter a new password"/>
                            </Form.Group>
                        </Col>
                        <Col className = "test2">
                            <Button onClick={this.changePassword}>
                                Change Password
                            </Button>
                        </Col>
                    </Row>
                    <p>{this.state.resultMessage}</p>
                </Form>
            </div>
        );
    }
}
export default withRouter(Settings);