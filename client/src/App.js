import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.js';
import { Nav, Navbar, NavItem, Image} from 'react-bootstrap';
import './App.css';
import AgoraIcon from "./Agora Logo.svg"

function App() {

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
        <LinkContainer to="/postview">
          <Nav.Link>Post Example</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/uploadview">
          <Nav.Link>Upload</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
    <Routes />
    </div>
  );
}

export default App;
