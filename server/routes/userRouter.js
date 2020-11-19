const userController = require('../controllers/userController.js');
const express = require('express');
const userRouter = express.Router();

// Route for registering
userRouter.post('/register', userController.createNewUser);

// Route for logging in
userRouter.post('/login', userController.login);

module.exports = userRouter