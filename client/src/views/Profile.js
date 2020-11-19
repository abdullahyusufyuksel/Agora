import { ListGroup, Container, Row, Col, Image, Card, CardDeck, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from "react";
import "./Profile.css"

export default function Profile() {
  return (
<div className="Profile" >
    <div className = "Profile-header">
        <Image className="Profile-icon" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" roundedCircle />
    </div>
<Container className="Profile-details">
    <Row>
        <Col className = "Username">
                <h4>@username</h4>
        </Col>
    </Row>
    <Row>
        <Col className = "Bio">
        <p>This is the bio. This is where the bio will go.</p>
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
                <h5>10</h5>
                </ListGroup.Item>
            </ListGroup>

        </Col>

        <Col>
            <ListGroup>
                <ListGroup.Item className="Stats-header">
                <h5>Citations:</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                <h5>13</h5> 
                </ListGroup.Item>
            </ListGroup>

        </Col>
                    
        <Col>
            <ListGroup>
                <ListGroup.Item className="Stats-header">
                <h5>Agora Score:</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                <h5>150</h5> 
                </ListGroup.Item>
            </ListGroup>

        </Col>
    </Row>
</Container>

<CardDeck className="Profile-Posts">
<Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="https://media.9news.com/assets/CCT/images/f91f601a-aa7e-485d-83a0-34ef17bdd6ef/f91f601a-aa7e-485d-83a0-34ef17bdd6ef_1920x1080.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-large-169.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhNa4eT025_r0HKkEz41Z0USG0Av0o9XMMfw&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://static.dw.com/image/52163054_303.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
</CardDeck>

<CardDeck className="Profile-Posts">
<Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="https://media.9news.com/assets/CCT/images/f91f601a-aa7e-485d-83a0-34ef17bdd6ef/f91f601a-aa7e-485d-83a0-34ef17bdd6ef_1920x1080.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-large-169.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhNa4eT025_r0HKkEz41Z0USG0Av0o9XMMfw&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://static.dw.com/image/52163054_303.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Post</Button>
  </Card.Body>
</Card>
</CardDeck>

</div>  
  );
}