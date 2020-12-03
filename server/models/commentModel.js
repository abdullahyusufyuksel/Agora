const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
{
    post: {type: String, required:true},
    author: {type: String, required: true},
    message: {type: String, required: true},
    upvotes: {type: Number, required: true}, 
    for: {type: Boolean, required: true},
    date: {type: Date, required:true}
});

module.exports = mongoose.model('COMMENTS', commentSchema);