import { ListGroup, Navbar, NavDropdown, Nav, Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { Component } from "react";
import "./Post.css"
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import upvoteArrow from "./../upvote_arrow.svg";
import heart from "./../heart.svg";



export class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "currentPost" : "",
            "upvotes" : 0,
            "comments" : [],
            "sourceList" : "",
            "newComment" : {
                "message" : "",
                "for" : null
            },
            "sortBy" : "",
            "postAuthor" : {}
    
        }
    }

    onChange = (e) => this.setState( {newComment : { message: e.target.value }});

    submitFor = (e) => {

        const {currentUser, match: {params}} = this.props;
        const {postID} = params;

        e.preventDefault();

        let commentSend = {
            message: this.state.newComment.message,
            for : true
        }

        let config = {
            headers : {
                "Authorization": currentUser.data.token
            }
        }
        axios.post(`http://localhost:5000/commentOnPost/${postID}`, commentSend, config)
        .then( () => {
            this.refreshComments()
        });
        this.setState({newComment:{message: ""}})
      }

    submitAgaisnt = (e) => {
        const {currentUser, match: {params}} = this.props;
        const {postID} = params;
        e.preventDefault();

        let commentSend = {
            message: this.state.newComment.message,
            for : false
        }

        let config = {
            headers : {
                "Authorization": currentUser.data.token
            }
        }

        this.setState({ newComment: {for: false}});
        axios.post(`http://localhost:5000/commentOnPost/${postID}`, commentSend, config)
        .then( () => {
            this.refreshComments()
           
        })
        this.setState({newComment:{message: ""}})
    }

    submitUpvote = (e) => {

        const {currentUser, match: {params}} = this.props;
        const {postID} = params;
        e.preventDefault();


        if (currentUser.data !== null) {

            let config = {
                headers : {
                    "Authorization": currentUser.data.token
                }
            }

            axios.post(`http://localhost:5000/upvotePost/${postID}`, "" ,config)
            .then( () => {
                this.setState({upvotes: (this.state.upvotes + 1)})
            
            })
        }
    }
    nextPath(path) {
        this.props.history.push(path);
      }

    goToUser = (username) => {
        this.nextPath(`/user/${username}`)
    }

    onSelect = (e) => {
       switch(parseInt(e)) {
        case 1 : {
            this.setState({sortBy: "Newest"})
            this.state.comments.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            });
            break;
        }
        case 2 : {
            this.setState({sortBy: "Oldest"})
            this.state.comments.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            });
            break;
        }
        case 3 : {
            this.setState({sortBy: "Most Upvoted"})
            this.state.comments.sort((a, b) => b.upvotes - a.upvotes);
            break;
        }
        default : {
            this.setState({sortBy: "Most Upvoted"})
        }
       }
    }

    upvoteComment = (comment) => {
        const {currentUser, match: {params}} = this.props;
        const {postID} = params;

        const index = this.state.comments.indexOf(comment)
        let commentsTemp = this.state.comments
        commentsTemp[index].upvotes = commentsTemp[index].upvotes + 1

            if (this.state.sortBy === "Most Upvoted"){
                commentsTemp.sort((a, b) => b.upvotes - a.upvotes);
            } else if (this.state.sortBy === "Newest"){
                commentsTemp.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date)
                });
            } else if (this.state.sortBy === "Oldest"){
                commentsTemp.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date)
                });
            }
            this.setState({comments : commentsTemp})
        this.setState({commets: commentsTemp})

        let config = {
            headers : {
                "Authorization": currentUser.data.token
            }
        }

        axios.post(`http://localhost:5000/upvoteComment/${postID}/${comment._id}`, currentUser.data ,config)
    }
    
    refreshComments(){
        const {match: {params}} = this.props;
        const {postID} = params;

        console.log(this.state)

        axios.get(`http://localhost:5000/post/${postID}`)
        .then(res =>{
            this.setState({
                currentPost : res.data,
                upvotes:  res.data.upvotes
            })
            
        });

        axios.get(`http://localhost:5000/getComments/${postID}`)
        .then(res =>{
            let commentsTemp = res.data
            if (this.state.sortBy === "Most Upvoted"){
                commentsTemp.sort((a, b) => b.upvotes - a.upvotes);
            } else if (this.state.sortBy === "Newest"){
                commentsTemp.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date)
                });
            } else if (this.state.sortBy === "Oldest"){
                commentsTemp.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date)
                });
            }
            this.setState({comments : commentsTemp})
        });

        
    }

      
    async componentDidMount() {
       
        const {match: {params}} = this.props;
        const {postID} = params;

        await axios.get(`http://localhost:5000/post/${postID}`)
        .then(res =>{
            this.setState({
                currentPost : res.data,
                upvotes: res.data.upvotes
            })
        });

        await axios.get(`http://localhost:5000/getComments/${postID}`)
        .then(res =>{
            this.setState({comments : res.data})
        });

        await axios.get(`http://localhost:5000/profile/${this.state.currentPost.author}`)
            .then(res =>
                {
                    this.setState({postAuthor : res.data})
                });

        this.state.comments.sort((a, b) => b.upvotes - a.upvotes);
    }

    render() {

        const {currentUser} = this.props;
        
        if (this.state.currentPost === ""){
            return (
                <div className="comment-header">
                    <h3>
                        Post not availble.
                    </h3>
                </div>
            )
        } else {


            return (
                <div className="Post" >
                    <div className = "profile-header">
                        <Button className="link" onClick={ () => this.goToUser(this.state.currentPost.author) }>
                            <Image className="profile-icon" src={`http://localhost:5000/${this.state.postAuthor.profilePicture}`} roundedCircle />
                            {this.state.currentPost.author}
                        </Button>
                    </div>

                    <img alt="post iamge"src={`http://localhost:5000/${this.state.currentPost.postMediaFilePath}`}/>                    

                    <Container className="details">
                        <Row>
                            <Col className = "sentence">
                                <h3>{this.state.currentPost.title}</h3>

                                <h6 className="message"> {this.state.currentPost.message}</h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="source">
                                <i>Sources:</i>
                                { 
                                    this.state.currentPost.sources.map( (source) => 
                                        (
                                            <p>
                                                <a href={source}> <i>{source}</i></a>
                                            </p>
                                        )
                                    )
                                }
                               
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <Navbar bg="light">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                <NavDropdown title={`Sort By: ${this.state.sortBy}`} onSelect={ (e)=> this.onSelect(e)} id="basic-nav-dropdown">
                                    <NavDropdown.Item eventKey={1}>Newest</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2}>Oldest</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={3}> Most Upvoted</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                
                            </Navbar.Collapse>
                            </Navbar>
                            </Col>

                            <Col>
                                ({this.state.upvotes}) <Image className="unselectable"  height="25px" width="25px"   src={heart} onClick={this.submitUpvote}/>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="comment">
                        <Row>
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className="comment-header" variant="success">
                                        For
                                    </ListGroup.Item>

                                    { 
                                        this.state.comments.map((comment) => {
                                                if (comment.for && currentUser.data !== null) {
                                                    return(
                                                            <ListGroup.Item> 
                                                                 <Image className="unselectable" height="25px" width="25px" src={upvoteArrow} onClick={ () => this.upvoteComment(comment)}/>({comment.upvotes}) <i>{comment.author}</i> {comment.message}
                                                            </ListGroup.Item>
                                                        )
                                                } else if (comment.for) {
                                                    return(
                                                        <ListGroup.Item> 
                                                        ({comment.upvotes})<Button className="link" onClick={() => this.goToUser(comment.author)}>{comment.author}</Button>{comment.message}
                                                   </ListGroup.Item>
                                                    )
                                                }
                                        })
                                       
                                    }
                                    
                                </ListGroup>

                            </Col>

                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className="comment-header" variant="danger">
                                        Against
                                    </ListGroup.Item>

                                    { 
                                        this.state.comments.map((comment) => {
                                                if (!comment.for && currentUser.data !== null) {
                                                    return(
                                                            <ListGroup.Item> 
                                                                 <Image className="unselectable" height="25px" width="25px" src={upvoteArrow} onClick={ () => this.upvoteComment(comment)}/>({comment.upvotes}) <i>{comment.author}</i> {comment.message}
                                                            </ListGroup.Item>
                                                        )
                                                } else if (!comment.for) {
                                                    return(
                                                        <ListGroup.Item> 
                                                        ({comment.upvotes})<Button className="link" onClick={() => this.goToUser(comment.author)}>{comment.author}</Button> {comment.message}
                                                   </ListGroup.Item>
                                                    )
                                                }
                                        })
                                       
                                    }

                                </ListGroup>

                            </Col>
                        </Row>

                        {
                            currentUser.data !== null
                            ? (
                                <Row>
                                    <InputGroup className="comment-bar"> 
                                        <FormControl
                                        name="commentField"
                                        placeholder="Comment..."
                                        aria-label="comment"
                                        aria-describedby="basic-addon2"
                                        onChange={this.onChange}
                                        value={this.state.newComment.message}
                                        />
                                        <InputGroup.Append>
                                            <Button variant="success" onClick={this.submitFor}>For</Button>
                                            <Button variant="danger" onClick={this.submitAgaisnt}>Against</Button>
                                        </InputGroup.Append>

                                    </InputGroup>
                                </Row>
                                )
                            : "Login to disscus on this post!"
                        }
                        
                    </Container>
                
                </div>
            );
        }
    }
};
export default withRouter(Post); 