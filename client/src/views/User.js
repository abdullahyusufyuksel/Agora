import { ListGroup, Container, Row, Col, Image, Card, CardColumns, Button } from 'react-bootstrap';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import React from "react";
import "./User.css"
import Axios from 'axios';


export class User extends Component {

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


  componentDidMount() {

    const {match: {params}} = this.props;
    const {username} = params;
    // this.setState({currentUser : this.props.currentUser.data})
    Axios.get(`/api/profile/${username}`)
    .then(res => {
        this.setState({currentUser: res.data})
    });

    try {
      Axios.get(`/api/getPostByUser/${username}`)
      .then(res => {
      this.setState({userPost : res.data})
      })
    } catch (err) {
      console.log(err)
    }
    
}

  render() {
   
    if (this.state.currentUser !== null) {

        console.log(this.state)

      return (
        <div className="Profile" >
        <div className = "Profile-header">
            <Image className="Profile-icon" src={`/api/${this.state.currentUser.profilePicture}`} roundedCircle />
        </div>
    <Container className="Profile-details">
        <Row>
            <Col className = "Username">
                <h4>{this.state.currentUser.username}</h4>
            </Col>
        </Row>
        <Row>
            <Col className = "Bio">
                <p>{this.state.currentUser.bio}</p>
            </Col>
        </Row>
        
    </Container>  

    <Container className="Profile-Stats">
        <Row>
            <Col>
                <ListGroup>
                    <ListGroup.Item className="Stats-header">
                    <h5>Posts:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <h5>{this.state.userPost.length}</h5>
                    </ListGroup.Item>
                </ListGroup>

            </Col>

            <Col>
                <ListGroup>
                <ListGroup.Item className="Stats-header">
                    <h5>Agora Score:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5 className="score"> {(this.state.currentUser.posts.length + this.state.currentUser.comments.length) * 2}</h5> 
                    </ListGroup.Item>
                </ListGroup>

            </Col>
                        
            <Col>
                <ListGroup>
                <ListGroup.Item className="Stats-header">
                    <h5>Comments:</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <h5>{this.state.currentUser.comments.length}</h5> 
                    </ListGroup.Item>
                   
                </ListGroup>

            </Col>
        </Row>
    </Container>



    <CardColumns className="Profile-Posts">
        {
          this.state.userPost.map( (post) => {
              return(
                <Card style={{flex: 0}}>
                  <Card.Img variant="top" src={`/api/${post.postMediaFilePath}`} />
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
    </CardColumns>
    </div>  
      );
    } else {
      return(
        <div>
          <h1 >This user does not exist.</h1>
        </div>
      );
    }
    
  }
}

export default withRouter(User);