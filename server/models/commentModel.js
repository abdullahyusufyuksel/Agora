const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
{
    post: {type: String, required:true},
    author: {type: String, required: true},
    message: {type: String, required: true},
    comments: [String],
    upvotes: {type: Int, required: true}    
});

export default mongoose.model('COMMENTS', commentSchema);