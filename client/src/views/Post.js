import { ListGroup, Navbar, NavDropdown, Nav, Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from "react";
import "./Post.css"

export default function Post() {
  return (
    <div className="Post" >
            <Row xs={2} md={4} lg={6}>
                <Col>
                    <Image className="profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
                </Col>
                <Col>
                    Username (123)
               </Col>
            </Row>
            <Image fluid className="post-img" src="https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-large-169.jpg"/>

            <Container className="details">
                <Row>
                    <Col>
                        <h6>The Black Lives Matter Movement has been fresh on my mind, what do you all think?</h6>
                    </Col>
                </Row>

                <Row>
                    <Col className="source">
                    <p>
                    <a href="https://www.cnn.com/2020/06/23/politics/black-lives-matter-support-impact/index.html"> <i> > https://www.cnn.com/2020/06/23/politics/black-lives-matter-support-impact/index.html</i></a>
                    </p>
                    <p>
                    <a href="https://blacklivesmatter.com/"> <i> > https://blacklivesmatter.com/</i></a>
                    </p>
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
                            <ListGroup.Item>
                                (23) Comment 2
                            </ListGroup.Item>
                            <ListGroup.Item>
                                (12) Comment 3
                            </ListGroup.Item>
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