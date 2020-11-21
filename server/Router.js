const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');
const commentController = require('./controllers/commentController.js');
const express = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const Router = express.Router();

const storage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, 'postMedia/');
        }, 
        filename: function(req, file, cb) 
        {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });
const upload = multer(
    {
        storage: storage,
        fileFilter: function(req, file, cb) 
        {
            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    });

// USER CONTROLLER ROUTES
// Route for viewing profile
Router.get('/profile', passport.authenticate('jwt', {session: false}), userController.getProfile);

// Route for registering
Router.post('/register', userController.createNewUser);

// Route for logging in
Router.post('/login', userController.login);

// POST CONTROLLER ROUTES
// Route for creating a post
Router.post('/upload', passport.authenticate('jwt', {session: false}), upload.single('image'), postController.createNewPost);

// Route for getting all posts
Router.get('/',passport.authenticate('jwt', {session: false}), postController.getAllPosts);

// Route for clearing database - DO NOT LINK TO FRONTEND
Router.delete('/', postController.clearDatabase);
module.exports = Router