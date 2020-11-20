const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const express = require('express');
const passport = require('passport');
const Router = express.Router();

// USER CONTROLLER ROUTES
// Route for viewing profile
Router.get('/profile', passport.authenticate('jwt', {session: false}), userController.getProfile);

// Route for registering
Router.post('/register', userController.createNewUser);

// Route for logging in
Router.post('/login', userController.login);

// POST CONTROLLER ROUTES
// Route for creating a post
Router.post('/upload', passport.authenticate('jwt', {session: false}), postController.createNewPost);

module.exports = Router