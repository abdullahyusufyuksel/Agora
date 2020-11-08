import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.js';

import { Nav, Navbar, NavItem} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Agora</Navbar.Brand>
      </LinkContainer>
      <Nav pullRight>
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
    <Routes />
    </div>
  );
}

export default App;
