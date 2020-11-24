import { ListGroup, Navbar, NavDropdown, Nav, Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import React from "react";
import { getPostbyID } from '../functions/postFunctions'
import "./Post.css"

const Post = (props) => {

    const postData = getPostbyID(props.postID)

    const sourceList = postData.sources.map( (source) => {
        return(
            <p>
                <a href={source}> <i> {">"} {source}</i></a>
            </p>
        )
    });

    const forCommentList = postData.comments.map( (comment) => {
        return(
            <ListGroup.Item> 
                {comment.message}
            </ListGroup.Item>
        )
    });

    const againstCommentList = postData.comments.map( (comment) => {
        return(
            <ListGroup.Item> 
                {comment.message}
            </ListGroup.Item>
        )
    });


    return (
        <div className="Post" >
            <div className = "profile-header">
                <Image className="profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
                {postData.author}
            </div>
            <Image fluid className="post-img" src="https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-large-169.jpg"/>

            <Container className="details">
                <Row>
                    <Col className = "sentence">
                        <h6>{postData.message}</h6>
                    </Col>
                </Row>

                <Row>
                    <Col className="source">
                        {sourceList}
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
};
export default Post; 