const fs = require('fs');
const path = require('path');
const Post = require("../models/postModel.js");
const isEmpty = require('is-empty');
const User = require("../models/userModel.js");

const validatePostParams = async function(newPost)
{
  let isValid = true;
  if(isEmpty(newPost.message))
  {
    isValid = false;
  }

  if(isEmpty(newPost.title))
  {
    isValid = false;
  }

  return isValid;

}

const validateSearchParams = async function(search)
{
  let isValid = true;

  if(isEmpty(search.search) || !search.search)
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
        title: req.body.title,
        sources: req.body.sources,
        postMediaFilePath: "NULL",
        date: Date.now(),
        upvotes: 0,
    }
    
    new Post(newPost).save()
        .then(function(data)
        {
            let mediaID = data._id;
            const imageFileName = 'postMedia/' + mediaID + path.extname(req.file.path);
            fs.renameSync(req.file.path, imageFileName);
            data.postMediaFilePath = imageFileName;
            Post(data).save();
            User.findOne({username: req.user.username}).then(function(data)
            {
              data.posts.push(mediaID);
              User(data).save();
            });
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

const getPostById = async function(req, res)
{
  Post.findById(req.params.id)
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
      res.status(200).send('Post Collection Cleared');
    });
}

const searchTitles = async function(req, res)
{
  let isValid = validateSearchParams(req.body);
  if(!isValid)
  {
    return res.status(400).send(isValid);
  }
  Post.find({title: { '$regex' : req.body.search, '$options' : 'i' }  })
    .then(function(data)
    {
      if(!isEmpty(data[0].title))
      {
        res.status(200).send({data, isFound: true});
      } else
      {
        res.status(404).send({isFound: false});
      }
    });
}

const upvotePost = async function(req, res)
{
  Post.findOne({_id: req.params.postID}).then(function(data)
  {
      data.upvotes++;
      Post(data).save();
  });

  User.findOne({username: req.user.username}).then(function(data)
  {
      data.postsUpvoted.push(req.params.postID);
      User(data).save();
      res.status(200).send(data);
  });
}

const removeUpvote = async function(req, res)
{
  Post.findOne({_id: req.params.postID}).then(function(data)
  {
      data.upvotes--;
      Post(data).save();
  });

  User.findOne({username: req.user.username}).then(function(data)
  {
    console.log(data.postsUpvoted);
    data.postsUpvoted = data.postsUpvoted.filter(function(value, index, arr)
    {
        return value != req.params.postID;
    });
    console.log(data.postsUpvoted);

    User(data).save();
  });
}

module.exports =
{
    createNewPost,
    getAllPosts,
    clearDatabase,
    searchTitles,
    upvotePost,
    removeUpvote,
    getPostById
};