const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
{
    post: {type: String, required:true},
    author: {type: String, required: true},
    message: {type: String, required: true},
    comments: [String],
    upvotes: {type: Number, required: true}    
});

module.exports = mongoose.model('COMMENTS', commentSchema);