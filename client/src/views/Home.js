import { Jumbotron, Button, Card, CardDeck, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from "react";
import "./Home.css"

const Home = (props) => {

  const userData = props.currentUser.data
  let userName;

  if (userData === null) {
    userName = "not loged in"
  } else {
    userName = userData.data.username
  }


  return (
    <div className="Home">
      <Jumbotron>
  <h1>Agora {userName}</h1>
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
        <Nav class="justify-center-right">
          <NavDropdown title="Sort By" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Social Topics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">New</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Trending</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
    <CardDeck className="Deck">
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
    <CardDeck className="Deck">
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
    <CardDeck className="Deck">
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
export default Home;