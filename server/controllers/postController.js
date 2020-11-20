const fs = require('fs');
const Post = require("../models/postModel.js");

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
        upvotes: 0
    }
    
    new Post(newPost).save()
        .then(function(data)
        {
            let mediaID = data._id;
            const imageFileName = './postMedia/' + mediaID + '.png';
            fs.writeFileSync(imageFileName, imageBuffer, 'base64');
            res.json(data);
        })
        .catch(function(err)
        {
            console.log(err);
            res.status(400).send(err);
        });
}
module.exports =
{
    createNewPost
};