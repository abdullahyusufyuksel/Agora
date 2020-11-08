import { Jumbotron, Button, Card, CardDeck, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from "react";

export default function Register() {
  return (
    <div className="Home">
      <Jumbotron>
        <h1>Agora</h1>
        <p>
          Share and fact-check advertisements and posts related to concurrent social topics today!
        </p>
        <p>
          <LinkContainer to="/register">
            <Button variant="primary">Sign Up</Button>
          </LinkContainer>
        </p>
      </Jumbotron>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Current Posts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav pullRight>
          <NavDropdown title="Sort By" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Social Topics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">New</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Trending</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
    <CardDeck>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="./postMedia/electionImage.jpg" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
    <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
    <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card.Img variant="top" src="holder.js/100px180" />
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