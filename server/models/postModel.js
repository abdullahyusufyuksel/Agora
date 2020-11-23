const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    author: {type: String, required: true},
    message: {type: String, required: true},
    title: {type: String, required:true},
    comments: [{type: String}],
    upvotes: {type: Number, required: true},
    date: {type: Date, required:true}
});

module.exports = mongoose.model('POSTS', postSchema);
