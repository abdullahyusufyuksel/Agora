const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    author: {type: String, required: true},
    message: {type: String, required: true},
    comments: [String],
    upvotes: {type: Number, required: true}
});

module.exports = mongoose.model('POSTS', postSchema);
