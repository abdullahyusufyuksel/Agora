import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Post from "./views/Post";
import Upload from "./views/Upload";
import Profile from "./views/Profile"
import Settings from "./views/Settings"
import User from "./views/User"

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
        <Profile currentUser={props.currentUser}/>
      </Route>
      <Route exact path="/settings">
        <Settings currentUser={props.currentUser}/>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="/post/:postID" render={ (props) => <Post currentUser={passedUser} {...props} />} />
      <Route path="/user/:username" render={ (props) => <User currentUser={passedUser} {...props} />} />
      <Route exact path="/upload">
        <Upload currentUser={props.currentUser} />
      </Route>
    </Switch>
  );
}

export default Routes;