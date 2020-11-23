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
Router.get('/', postController.getAllPosts);

// Route for clearing database - DO NOT LINK TO FRONTEND
Router.delete('/', postController.clearDatabase);

// Route for searching for a title with the matching search parameter
Router.get('/search', postController.searchTitles);

// Route for upvoting a post
Router.post('/upvotePost/:postID', passport.authenticate('jwt', {session: false}), upload.single('image'), postController.upvotePost)

// COMMENT CONTROLLER ROUTES
// Route for creating a comment
Router.post('/post/:postID', passport.authenticate('jwt', {session: false}), commentController.createNewComment);

// Route for upvoting a comment
Router.post('/upvoteComment/:postID/:commentID', passport.authenticate('jwt', {session: false}), commentController.upvoteComment);
module.exports = Router