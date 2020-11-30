import { ListGroup, Navbar, NavDropdown, Nav, Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { Component } from "react";
import "./Post.css"
import axios from 'axios';


export class Post extends Component {

    state = {
        "currentPost" : null,
        "comments" : null,
        "sourceList" : null,
        "forCommentList" : null,
        "agaisntCommentList" : null

    }

    componentDidMount() {

        let postID = this.props.match.params.postID

        console.log(postID)

        axios.get(`http://localhost:5000/post/${postID}`)
        .then(res =>{
            this.setState({currentPost : res.data})
        });

        if (this.state.currentPost !== null) {
            const sourceList = this.state.currentPost.sources.map( (source) => 
                (
                    <p>
                        <a href={source}> <i> {">"} {source}</i></a>
                    </p>
                )
            );
    
            this.setState({sourceList: sourceList})
    
            axios.get(`http://localhost:5000/getComments/${postID}`)
            .then(res =>{
                this.setState({comments : res.data})
            });
    
             const forCommentList = this.state.comments.filter( (comment) => {
                if (comment.for) {
                return(
                        <ListGroup.Item> 
                            {comment.message}
                        </ListGroup.Item>
                    )
                }
            });
    
            this.setState({forCommentList: forCommentList})
    
    
            const againstCommentList = this.state.comments.filter( (comment) => {
                if (!comment.for) {
                return(
                        <ListGroup.Item> 
                            {comment.message}
                        </ListGroup.Item>
                    )
                }
            });
    
            this.setState({againstCommentList: againstCommentList})
        }
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
        
            return (
                <div className="Post" >
                    <div className = "profile-header">
                        <Image className="profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
                        {this.state.currentPost.author}
                    </div>
                    <Image fluid className="post-img" src="https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-large-169.jpg"/>

                    <Container className="details">
                        <Row>
                            <Col className = "sentence">
                                <h3>{this.state.currentPost.title}</h3>

                                <h6 className="message"> {this.state.currentPost.message}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="source">
                                { 
                                    this.state.currentPost.sources.map( (source) => 
                                        (
                                            <p>
                                                <a href={source}> <i> {">"} {source}</i></a>
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
                                    {this.state.forCommentList}
                                    
                                </ListGroup>

                            </Col>

                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className="comment-header" variant="danger">
                                        Against
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        (1) Comment 2
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        (0) Comment 3
                                    </ListGroup.Item>
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
                                    <Button variant="success">For</Button>
                                    <Button variant="danger">Against</Button>
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