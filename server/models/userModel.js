const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    username: {type:String, required: true},
    password: {type:String, required: true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    bio: {type:String, required: true},
    isAdmin: {type:Boolean, required:true},
    profilePicture: {type: String, required: true},
    posts: [{type: String, required: true}],
    comments: [{type: String, required: true}],
    postsUpvoted: [{type: String, required: true}],
    commentsUpvoted: [{type: String, required:true}],
});

module.exports = mongoose.model('USERS', userSchema);
