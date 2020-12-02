import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.js';
import { Nav, Navbar, NavItem, Image} from 'react-bootstrap';
import './App.css';
import AgoraIcon from "./Agora Logo.svg";
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({
    token: null,
    data: null
  });


  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <div class="navbar-nav abs-center-x">
      <LinkContainer to="/">
        <Navbar.Brand>
        <a href="#">
          <img class="logoSpacing" src={AgoraIcon} />
        </a>        
          </Navbar.Brand>
      </LinkContainer>
      </div>

      <Nav class="navbar-nav ml-auto">
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/profile">
          <Nav.Link>Profile</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/uploadview">
          <Nav.Link>Upload</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/post/5fc6aca323bf6e1e7ae8e4ca">
          <Nav.Link>Ex</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
    <Routes currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
