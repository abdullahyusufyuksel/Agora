import { Jumbotron, Button, Card, CardDeck, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import React from "react";
import "./Home.css"
import Axios from 'axios';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        "userPost" : [] ,
        defaultNew : true 
    }
}

  handleSelect = (e) => {
   
    switch(parseInt(e)) {
      case 1 : {
        if (this.state.defaultNew === false)
        {
       
       this.setState({ userPost: this.state.userPost.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
      })})
        
        this.setState({defaultNew: true})
        }
          break;
      }
      case 2 : {
        
          if (this.state.defaultNew === true)
          {
          this.setState({userPost: this.state.userPost.sort((a,b) => b.upvotes - a.upvotes)})
          this.setState({defaultNew: false})
          }
        
          break;
      }
      default : {
       
    }
   
  }
}


nextPath(path) {
  this.props.history.push(path);
}

componentDidMount(){
  
  Axios.get(`/api/`)
  .then(res => {
    this.setState({userPost : res.data})
    this.setState({ userPost: this.state.userPost.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
  })})
   
  })
}

  render() { 
    
    const userData = this.props.currentUser.data
    //const userPostLen = this.state.userPost.length
    let header, hMessage, hButton1, hButton2, link1, link2,rHeader1,rMessage1,rHeader2,rMessage2;
   

    if (userData === null) {
      header = ""
      hButton1 = "Sign Up"
      hButton2 = "Login"
      link1 = "/register"
      link2 = "/login"
      hMessage = "Share and debate advertisement, news, and posts related to concurrent social topics today!"
      rHeader1 =""
      rHeader2 = ""
      rMessage1= ""
      rMessage2=""
  } else {
      header = "Welcome, " + userData.data.username
      hButton1 = ""
      hButton2 = ""
      link1 = ""
      link2 = ""
      hMessage = "Bsaed on Agora Trending: \"how to stay safe during covid\" "
      rHeader1 ="When to Quarantine:"
      rHeader2 = "CDC testing information:"
      rMessage1= "https://www.cdc.gov/coronavirus/2019-ncov/more/scientific-brief-options-to-reduce-quarantine.html"
      rMessage2="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"

  }
 
 
    return (
    <div className="Home">
      <Jumbotron>
  <h1>{header}</h1>
        <h4>
          {hMessage}
        </h4>
        <p>
         
          <LinkContainer to={link1}>
    <Button variant="primary">{hButton1}</Button>
          </LinkContainer>
        </p>
         
    <h5>{rHeader1} </h5>
        <h6>{rMessage1} </h6>

        <p>
        <LinkContainer to={link2}>
    <Button variant="primary">{hButton2}</Button>
          </LinkContainer>
        </p>
        
        <h5>{rHeader2} </h5>
        <h6>  {rMessage2} </h6>
      
      </Jumbotron>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand >Discover</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="justify-center-right">
          <NavDropdown title="Sort By" onSelect={ (e)=> this.handleSelect(e)}  id="basic-nav-dropdown">
            <NavDropdown.Item eventKey={1}>New</NavDropdown.Item>
            <NavDropdown.Item eventKey={2}>Trending</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
    
    <CardDeck className="Deck">
     {this.state.userPost.slice(0,4).map( (post) => {
        return (
      <Card style={{ width: '22rem' }}>
        <Card.Img className="image-card" variant="top" src={`/api/${post.postMediaFilePath}`} />
        <Card.Body>
    <Card.Title>{post.title} </Card.Title>
          <Card.Text>
            {post.message}
          </Card.Text>
          <Button onClick={() => this.nextPath(`/post/${post._id}`) } variant="primary">View Post</Button>
        </Card.Body>
      </Card>
       )
       
      })
     }
    </CardDeck>
    
    <CardDeck className="Deck">
    {this.state.userPost.slice(4,8).map( (post) => {
        return (
      <Card style={{ width: '22rem' }}>
        <Card.Img className="image-card" variant="top" src={`/api/${post.postMediaFilePath}`} />
        <Card.Body>
    <Card.Title>{post.title} </Card.Title>
          <Card.Text>
            {post.message}
          </Card.Text>
          <Button onClick={() => this.nextPath(`/post/${post._id}`) } variant="primary">View Post</Button>
        </Card.Body>
      </Card>
       )
       
      })
     }
    </CardDeck>

    <CardDeck className="Deck">
    {this.state.userPost.slice(8,12).map( (post) => {
        return (
      <Card style={{ width: '22rem' }}>
        <Card.Img className="image-card" variant="top" src={`/api/${post.postMediaFilePath}`} />
        <Card.Body>
    <Card.Title>{post.title} </Card.Title>
          <Card.Text>
            {post.message}
          </Card.Text>
          <Button onClick={() => this.nextPath(`/post/${post._id}`) } variant="primary">View Post</Button>
        </Card.Body>
      </Card>
       )
       
      })
     }   
    </CardDeck>
    </div>
    )
  }
}
export default withRouter(Home);