const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');
const commentController = require('./controllers/commentController.js');
const express = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const Router = express.Router();

let postFilePath =  path.resolve(__dirname + '/postMedia/');
let profPicFilePath =  path.resolve(__dirname + '/profilePics/');

// MULTER FOR POSTS
const postStorage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            // console.log(postFilePath);
            cb(null, postFilePath);
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
            // console.log(profPicFilePath);
            cb(null, profPicFilePath);
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
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    });

/*
    USER CONTROLLER ROUTES
*/

// Route for viewing 
Router.get('/api/profile', passport.authenticate('jwt', {session: false}), userController.getProfile);

// Route for registering
Router.post('/api/register', userController.createNewUser);

// Route for logging in
Router.post('/api/login', userController.login);

// Route for getting user by username
Router.get('/api/profile/:username', userController.getUserByUsername)

// Route for updating user bio
Router.post('/api/updateBio', passport.authenticate('jwt', {session: false}), userController.updateBio);

// Route for changing profile pic
Router.post('/api/changeProfilePicture', passport.authenticate('jwt', {session: false}), userUpload.single('image'), userController.changeProfilePic)

// Route for changing password
Router.post('/api/changePassword', passport.authenticate('jwt', {session: false}), userController.changePassword);

// Route for getting profile pic
Router.get('/api/profilePics/:fileName', userController.getImage);
/*
    POST CONTROLLER ROUTES
*/

// Route for creating a post
Router.post('/api/upload', passport.authenticate('jwt', {session: false}), postUpload.single('image'), postController.createNewPost);

// Route for getting all posts
Router.get('/api/', postController.getAllPosts);


// Route for getting post by id 
// @access PUBLIC
Router.get('/api/post/:postID', postController.getPostById)

// Route for clearing post database - DO NOT LINK TO FRONTEND

Router.delete('/api/', postController.clearDatabase);

// Route for searching for a title with the matching search parameter
Router.get('/api/search', postController.searchTitles);

// Route for upvoting a post
Router.post('/api/upvotePost/:postID', passport.authenticate('jwt', {session: false}), postController.upvotePost)

// Route for removing an upvote from a post
Router.post('/api/removePostUpvote/:postID', passport.authenticate('jwt', {session: false}), postController.removeUpvote);

// Route for getting image
Router.get('/api/postMedia/:fileName', postController.getImage);

// Route for getting post by username
Router.get('/api/getPostByUser/:username', postController.getPostByUser);
/*
    COMMENT CONTROLLER ROUTES
*/

// Route for creating a comment
Router.post('/api/commentOnPost/:postID', passport.authenticate('jwt', {session: false}), commentController.createNewComment);

// Route for upvoting a comment
Router.post('/api/upvoteComment/:postID/:commentID', passport.authenticate('jwt', {session: false}), commentController.upvoteComment);

// Route for removing an upvote from a comment
Router.post('/api/removeCommentUpvote/:commentID', passport.authenticate('jwt', {session: false}),  commentController.removeUpvote);

// Route for getting comments by postID
Router.get('/api/getComments/:postID', commentController.getCommentsByPostID);

module.exports = Router