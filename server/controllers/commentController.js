const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

const createNewComment = async function(req, res)
{
    const newComment = 
    {
        post: (await Post.findOne({_id: req.params.postID}))._id,
        author: req.user.username,
        message: req.body.message,
        upvotes: 0,
        for: req.body.for,
        date: Date.now()
    }

    new Comment(newComment).save()
        .then(function(data)
        {
            Post.update({_id: req.params.postID},{ $push: {comments: data._id}});
            Post.findOne({_id: req.params.postID}).then(function(post)
            {
                post.comments.push(data._id);
                Post(post).save();
            });
            User.findOne({username: req.user.username}).then(function(user)
            {
              user.comments.push(data._id);
              User(user).save();
            });
            res.status(200).send(data);
        });
}

const upvoteComment = async function(req, res)
{
    Comment.find({_id: req.params.commentID}).then(function(data)
    {
        data.upvotes++;
        Comment(data).save();
    });

    User.find({username: req.user.username}).then(function(data)
    {
        data.commentsUpvoted.push(req.params.commentID);
        User(data).save();
    });
    
}

const removeUpvote = async function(req, res)
{
  Comment.findOne({_id: req.params.commentID}).then(function(data)
  {
      data.upvotes--;
      Post(data).save();
  });

  User.findOne({username: req.user.username}).then(function(data)
  {
    console.log(data.commentsUpvoted);
    data.commentsUpvoted = data.commentsUpvoted.filter(function(value, index, arr)
    {
        return value != req.params.commentID;
    });
    console.log(data.commentsUpvoted);

    User(data).save();
  });
}
module.exports =
{
    createNewComment,
    upvoteComment,
    removeUpvote
};