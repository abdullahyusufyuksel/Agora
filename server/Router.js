const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');
const commentController = require('./controllers/commentController.js');
const express = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const Router = express.Router();

// MULTER FOR POSTS
const postStorage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, 'postMedia/');
        }, 
        filename: function(req, file, cb) 
        {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });
const postUpload = multer(
    {
        storage: postStorage,
        fileFilter: function(req, file, cb) 
        {
            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    });

// MULTER FOR PROFILE PICS
const userStorage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, 'profilePics/');
        }, 
        filename: function(req, file, cb) 
        {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });
const userUpload = multer(
    {
        storage: userStorage,
        fileFilter: function(req, file, cb) 
        {
            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            }
                return cb(new Error('Only image files are allowed!'), false);
            cb(null, true);
        }
    });

/*
    USER CONTROLLER ROUTES
*/

// Route for viewing 
Router.get('/profile', passport.authenticate('jwt', {session: false}), userController.getProfile);

// Route for registering
Router.post('/register', userController.createNewUser);

// Route for logging in
Router.post('/login', userController.login);

// Route for getting user by username
Router.get('/profile/:username', userController.getUserByUsername)

// Route for updating user bio
Router.post('/updateBio', passport.authenticate('jwt', {session: false}), userController.updateBio);

// Route for changing profile pic
Router.post('/changeProfilePicture', passport.authenticate('jwt', {session: false}), userUpload.single('image'), userController.changeProfilePic)

/*
    POST CONTROLLER ROUTES
*/

// Route for creating a post
Router.post('/upload', passport.authenticate('jwt', {session: false}), postUpload.single('image'), postController.createNewPost);

// Route for getting all posts
Router.get('/', postController.getAllPosts);


// Route for getting post by id 
// @access PUBLIC
Router.get('/post/:postID', postController.getPostById)

// Route for clearing post database - DO NOT LINK TO FRONTEND

Router.delete('/', postController.clearDatabase);

// Route for searching for a title with the matching search parameter
Router.get('/search', postController.searchTitles);

// Route for upvoting a post
Router.post('/upvotePost/:postID', passport.authenticate('jwt', {session: false}), postController.upvotePost)

// Route for removing an upvote from a post
Router.post('/removePostUpvote/:postID', passport.authenticate('jwt', {session: false}), postController.removeUpvote);

/*
    COMMENT CONTROLLER ROUTES
*/

// Route for creating a comment
Router.post('/commentOnPost/:postID', passport.authenticate('jwt', {session: false}), commentController.createNewComment);

// Route for upvoting a comment
Router.post('/upvoteComment/:postID/:commentID', passport.authenticate('jwt', {session: false}), commentController.upvoteComment);

// Route for removing an upvote from a comment
Router.post('/removeCommentUpvote/:commentID', passport.authenticate('jwt', {session: false}),  commentController.removeUpvote);

// Route for getting comments by postID
Router.get('/getComments/:postID', commentController.getCommentsByPostID);

module.exports = Router