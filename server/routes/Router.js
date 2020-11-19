const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const express = require('express');
const Router = express.Router();

// Route for registering
Router.post('/register', userController.createNewUser);

// Route for logging in
Router.post('/login', userController.login);

module.exports = Router