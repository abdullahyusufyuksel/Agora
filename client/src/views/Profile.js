import { ListGroup, Container, Row, Col, Image, Card, CardDeck, Button } from 'react-bootstrap';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import React from "react";
import "./Profile.css"
import Axios from 'axios';


export class Profile extends Component {

  constructor(props) {
      super(props);

      this.state = {
          "currentUser" : null,
          "userPost" : []
      }
  }

  nextPath(path) {
    this.props.history.push(path);
  }


  componentDidMount(){
    this.setState({currentUser : this.props.currentUser.data})

    Axios.get(`http://localhost:5000/`)
    .then(res => {
      this.setState({userPost : res.data})
    })
  }

  render() {
   
    if (this.state.currentUser !== null) {

      console.log(this.state.currentUser)
      return (
        <div className="Profile" >
        <div className = "Profile-header">
            <Image className="Profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
        </div>
    <Container className="Profile-details">
        <Row>
            <Col className = "Username">
                <h4>{this.state.currentUser.data.username}</h4>
            </Col>
        </Row>
        <Row>
            <Col className = "Bio">
                <p>{this.state.currentUser.data.bio}</p>
            </Col>
        </Row>
        
        <Button variant="primary">Settings</Button>
    </Container>  

    <Container className="Profile-Stats">
        <Row>
            <Col>
                <ListGroup>
                    <ListGroup.Item className="Stats-header">
                    <h5>Posts:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <h5>{this.state.currentUser.data.posts.length}</h5>
                    </ListGroup.Item>
                </ListGroup>

            </Col>

            <Col>
                <ListGroup>
                    <ListGroup.Item className="Stats-header">
                    <h5>Comments:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <h5>{this.state.currentUser.data.comments.length}</h5> 
                    </ListGroup.Item>
                </ListGroup>

            </Col>
                        
            <Col>
                <ListGroup>
                    <ListGroup.Item className="Stats-header">
                    <h5>Agora Score:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>{(this.state.currentUser.data.posts.length + this.state.currentUser.data.comments.length) * 2}</h5> 
                    </ListGroup.Item>
                </ListGroup>

            </Col>
        </Row>
    </Container>

    <CardDeck className="Profile-Posts">
        {
          this.state.userPost.map( (post) => {
              return(
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="https://media.9news.com/assets/CCT/images/f91f601a-aa7e-485d-83a0-34ef17bdd6ef/f91f601a-aa7e-485d-83a0-34ef17bdd6ef_1920x1080.jpg" />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      {post.message}
                    </Card.Text>
                    <Button onClick={() => this.nextPath(`/post/${post._id}`) } variant="primary">View Post</Button>
                  </Card.Body>
                </Card>
                )
          })
        }
    </CardDeck>
    </div>  
      );
    } else {
      return(
        <div>
          <h1 >Log in to view profile.</h1>
        </div>
      );
    }
    
  }
}

export default withRouter(Profile);