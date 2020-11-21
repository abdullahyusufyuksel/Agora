const fs = require('fs');
const path = require('path');
const Post = require("../models/postModel.js");
const isEmpty = require('is-empty');

const validatePostParams = async function(newPost)
{
  let isValid = true;
  if(isEmpty(newPost.message))
  {
    isValid = false;
  }

  return isValid;

}
const createNewPost = async function(req, res)
{
    let isValid = await validatePostParams(req.body);
    if (!isValid) {
      return res.status(400).send(
        {
        error: "Request body was invalid.",
        }
      );
    }
    let newPost =
    {
        author: req.user.username,
        message: req.body.message,
        date: Date.now(),
        upvotes: 0
    }
    
    new Post(newPost).save()
        .then(function(data)
        {
            let mediaID = data._id;
            const imageFileName = 'postMedia/' + mediaID + path.extname(req.file.path);
            fs.renameSync(req.file.path, imageFileName);
            res.status(200).send(data);
        })
        .catch(function(err)
        {
            console.log(err);
            res.status(400).send(err);
        });
}

const getAllPosts = async function(req, res)
{
  Post.find({})
    .then(function(data)
    {
      res.status(200).send(data);
    });
}

const clearDatabase = async function(req, res)
{
  Post.remove()
    .then(function(data)
    {
      res.status(200).send('Database cleared');
    });
}
module.exports =
{
    createNewPost,
    getAllPosts,
    clearDatabase
};