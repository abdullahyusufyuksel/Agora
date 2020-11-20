import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.js';
import { Nav, Navbar, NavItem, Image} from 'react-bootstrap';
function App() {



  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Agora</Navbar.Brand>
      </LinkContainer>

      <Nav class="navbar-nav ml-auto">
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/profile">
          <Nav.Link>Profile</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
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
