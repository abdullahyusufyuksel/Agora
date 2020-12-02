import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import {Image} from 'react-bootstrap';

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Post from "./views/Post";
import Upload from "./views/Upload";
import Profile from "./views/Profile"

const Routes = (props) => {

  let passedUser = props.currentUser
  
  return (
    <Switch>
      <Route exact path="/">
        <Home currentUser={props.currentUser} />
      </Route>
      <Route exact path="/login">
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="/post/:postID" render={ (props) => <Post currentUser={passedUser} {...props} />} />
      <Route exact path="/uploadview">
        <Upload/>
      </Route>
    </Switch>
  );
}

export default Routes;