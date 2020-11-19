const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    username: {type:String, required: true},
    password: {type:String, required: true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    profilePicture: {type: String},
    posts: [String],
    comments: [String],
    postsUpvoted: [String]
});

module.exports = mongoose.model('USERS', userSchema);
