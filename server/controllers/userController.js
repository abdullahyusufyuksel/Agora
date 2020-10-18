const User = require("../models/userModel.js");

const createNewUser = async function(req, res) 
{
    // The request body didn't match correct params - This should never really happen with a front-end.
    const newUser = req.body;
    if (!newUser) {
      return res.status(200).send(
        {
        error: "Request body was invalid.",
        }
      );
    }

    // Create new user - if gotten here, user does not exist and the request body was a valid request
    
    // NEED TO ADD HASHING FOR PASSWORDS

    await new User(newUser).save()
      .then(function (data)
      {
        res.json(data);
      })
      .catch(function(err)
      {
        res.status(200).send(err);
      });
};

export
{
    createNewUser
};