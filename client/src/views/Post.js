import { ListGroup, Navbar, NavDropdown, Nav, Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { Component } from "react";
import "./Post.css"
import axios from 'axios';

//const testImg = require("./../postMedia/5fc570a187776309eea6ec17.png")


export class Post extends Component {

    state = {
        "currentPost" : null,
        "comments" : [],
        "sourceList" : "",
        "forCommentList" : "",
        "agaisntCommentList" : ""

    }

    componentDidMount() {

        let postID = this.props.match.params.postID

        console.log(postID)

        axios.get(`http://localhost:5000/post/${postID}`)
        .then(res =>{
            this.setState({currentPost : res.data})
        });

        axios.get(`http://localhost:5000/getComments/${postID}`)
        .then(res =>{
            this.setState({comments : res.data})
        });
    }

    render() {
        
        if (this.state.currentPost === null){
            return (
                <div className="comment-header">
                    <h3>
                        Post not availble.
                    </h3>
                </div>
            )
        } else {

            const forCommentList = 
            this.state.comments.map((comment) => {
                if (comment.for) {
                    return(
                            <ListGroup.Item> 
                                ({comment.upvotes}) <i>{comment.author}</i> {comment.message}
                            </ListGroup.Item>
                        )
                }
            });
            
            const againstCommentList = 
            this.state.comments.map((comment) => {
                if (!comment.for) {
                    return(
                            <ListGroup.Item> 
                                ({comment.upvotes}) <i>{comment.author}</i> {comment.message}
                            </ListGroup.Item>
                        )
                }
            });


            return (
                <div className="Post" >
                    <div className = "profile-header">
                        <Image className="profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
                        {this.state.currentPost.author}
                    </div>

                    <Container className="details">
                        <Row>
                            <Col className = "sentence">
                                <h3>{this.state.currentPost.title}</h3>

                                <h6 className="message"> {this.state.currentPost.message}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="source">
                                <i>Souces:</i>
                                { 
                                    this.state.currentPost.sources.map( (source) => 
                                        (
                                            <p>
                                                <a href={source}> <i>{source}</i></a>
                                            </p>
                                        )
                                    )
                                }
                               
                            </Col>
                        </Row>

                        <Row>
                            <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav pullRight>
                                <NavDropdown title="Sort By" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Newest</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Oldest</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Most Upvoted</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                
                            </Navbar.Collapse>
                            </Navbar>
                        </Row>
                    </Container>

                    <Container className="comment">
                        <Row>
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className="comment-header" variant="success">
                                        For
                                    </ListGroup.Item>

                                    {forCommentList}
                                    
                                </ListGroup>

                            </Col>

                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className="comment-header" variant="danger">
                                        Against
                                    </ListGroup.Item>

                                    {againstCommentList}

                                </ListGroup>

                            </Col>
                        </Row>
                        <Row>
                            <InputGroup className="comment-bar"> 
                                <FormControl
                                placeholder="Comment..."
                                aria-label="comment"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="success" onSubmit={this.submitFor}>For</Button>
                                    <Button variant="danger" onSubmit={this.submitAgaisnt}>Against</Button>
                                </InputGroup.Append>

                            </InputGroup>

                        </Row>
                    </Container>
                
                </div>
            );
        }
    }
};
export default Post; 