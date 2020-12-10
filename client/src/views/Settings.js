
import { Button, Form } from 'react-bootstrap';
import React from "react";
//import { Button, Form } from 'react-bootstrap';
import './Settings.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class Settings extends React.Component{
    constructor(props) {
        super(props);
        
        this.changePassword = this.changePassword.bind(this);
        this.savebio = this.savebio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);

        this.state = { 
            currentUser : null,
            password: this.props.currentUser.password,
            bio: this.props.currentUser.bio,
            file: null,
            filePath: null
        }; 
    } 
    onSubmit(e){
        e.preventDefault();
           
        console.log(`file: ${this.state.filePath}`);

        let temp = new FormData();
        temp.append('image', this.state.filePath, this.state.filePath.fileName);

        let config = {
            headers : {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${temp._boundary}`,
                "Authorization": this.props.currentUser.data.token
            }
        }

        axios.post('/api/changeProfilePicture', temp, config)
            .then(res => {
                // console.log(res.data);
                // this.nextPath('/profile')
                this.nextPath('/login');
                window.location.reload();
            })

        this.setState({
            file: null,
        })
    }
    nextPath(path) {
        this.props.history.push(path);
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
                file: null,
                filePath: null
            })
        }
    }
    changePassword = (e) => {
        e.preventDefault();

        console.log(this.state.currentUser)
        

        var password = {
            password: this.state.password,
          };
        let config = {
            headers : {
                "Authorization": this.props.currentUser.data.token}
        }
        axios.post('/api/changePassword', password, config)
            .then(res => {
                this.nextPath('/login');
                window.location.reload();
                // console.log(res);
            });
        
        this.setState({
            password: ''
        })

     }

    savebio = (e) => {
        e.preventDefault();

        var bio = {
            bio: this.state.bio
        };

        let config = {
            headers : {
                "Authorization": this.props.currentUser.data.token}
        }

        axios.post('/api/updateBio', bio, config)
            .then(res => {
                //this.props.setCurrentUser('data', {'bio':this.state.bio})
                // console.log(res);
                this.nextPath('/login');
                window.location.reload();
            });

        this.setState({
            bio: ''
        })
     }

    componentDidMount(){ 
        this.setState({currentUser : this.props.currentUser})
        console.log(this.props)
      }

    render(){
        return (
            <div className="settings">
                <Form className = "settingsForm">
                    <h1 className="text-center">
                        <span classname="font-weight-bold">
                            Settings
                        </span>
                    </h1>
                    <Form.Group>
                        <Form.Label class="space">
                            Change Profile Picture
                        </Form.Label>
                        <input type="file" onChange={this.handleImage}/>
                        <img class = "image" src={this.state.file}/>
                    </Form.Group>
                    <Button onClick={this.onSubmit}>
                        Save Profile Picture Changes
                    </Button>

                    <Form.Group>
                        <Form.Label class="space">
                            Change Bio
                        </Form.Label>
                        <Form.Control name = "bio" value={this.state.bio} savebio={e => this.savebio(e)} onChange={(e) => this.setState({ bio: e.target.value })} placeholder="Enter your new bio"/>
                    </Form.Group>
                    <Button onClick={this.savebio}>
                        Save Bio Changes
                    </Button>

                    <Form.Group>
                        <Form.Label class="space">
                            Change Password
                        </Form.Label>
                        <Form.Control name = "password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter your new password"/>
                    </Form.Group>
                    <Button onClick={this.changePassword}>
                        Save Password Changes
                    </Button>
                    
                <p>{this.state.resultMessage}</p>

                </Form>
            </div>
        );
    }
}
export default withRouter(Settings);