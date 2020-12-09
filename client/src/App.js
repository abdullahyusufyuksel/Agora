import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.js';
import { Nav, Navbar, Image} from 'react-bootstrap';
import './App.css';
import AgoraIcon from "./Agora Logo.svg";
import UploadIcon from './upload_icon.svg';
import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser : {
        token : null,
        data : null
      }

    }
  }

   setCurrentUser = (state, value) => {
    this.setState({currentUser : { [state] : value }})
  }


  render(){
    return (
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <div class="navbar-nav abs-center-x">
        <LinkContainer to="/">
            <Nav.Link>
            <Image className="logoSpacing" src={AgoraIcon} /> 
            </Nav.Link>
        </LinkContainer>
        </div>

        <Nav class="navbar-nav ml-auto">
        { ( () => {
                if (this.state.currentUser.token === null || this.state.currentUser.data === undefined) {
                  return (
                    <Nav class="navbar-nav ml-auto">
                      <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                      </Nav>
                  ) 
                  
                } else {

                  const username = this.state.currentUser.data.data.username
                  const profilePath = this.state.currentUser.data.data.profilePicture
                  
                  
                  return(
                    
                    <Nav class="navbar-nav ml-auto">
                        <LinkContainer to="/profile">
                      <Nav.Link>
                        <Image height= "25px" width= "25px" className="navbar-icon unselectable" src={`/api/${profilePath}`} roundedCircle />{username}
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/upload">
                      <Nav.Link>
                        <Image height= "20px" width= "20px" className="navbar-icon unselectable" src={UploadIcon}/>
                        </Nav.Link>
                      </LinkContainer>
                    </Nav>
                  )
                } 
            }) () 
          }
        </Nav>
      </Navbar>
      <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
      </div>
    );
  }
}

export default App;
