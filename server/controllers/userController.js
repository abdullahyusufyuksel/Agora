const isEmpty = require('is-empty');
const bcrypt = require('bcrypt');
const User = require("../models/userModel.js");
const config = require('../../config/config.js');

const validateInputReg = async function(newUser)
{
  let isValid = true;
  if(isEmpty(newUser.username))
  {
    isValid = false;
  }

  if(isEmpty(newUser.password))
  {
    isValid = false;
  }

  if(isEmpty(newUser.firstName))
  {
    isValid = false;
  }

  if(isEmpty(newUser.lastName))
  {
    isValid = false;
  }

  if(isEmpty(newUser.email))
  {
    isValid = false;
  }
  return isValid;

}

const validateInputLogin = async function(user)
{
  let isValid = true;

  if(isEmpty(newUser.username))
  {
    isValid = false;
  }

  if(isEmpty(newUser.password))
  {
    isValid = false;
  }
  return isValid;
}

const createNewUser = async function(req, res) 
{
    // The request body didn't match correct params - This should never really happen with a front-end.
    var newUser = req.body;
    let isValid = await validateInputReg(newUser);
    if (!isValid) {
      return res.status(400).send(
        {
        error: "Request body was invalid.",
        }
      );
    }
    await User.findOne({email: newUser.email})
      .then(function(data)
      {
        if(data)
        {
          return res.status(400).send(
            {
              error: "User already exists"
            });
        }
      });
    await User.findOne({ username: newUser.username })
      .then(function(data)
      {
        if(data)
        {
          return res.status(400).send(
          {
            error: "User already exists",
          });          
        } else
        {
          bcrypt.genSalt(10, function(err, salt)
          {
            bcrypt.hash(newUser.password, salt, function(err, hash)
            {
              newUser.password = hash;
              new User(newUser).save()
                .then(function(data)
                {
                  res.json(data);
                })
                .catch(function(err)
                {
                  res.status(400).send(err);
                });
            })
          })
        }
      });
};
const login = async function(req, res)
{
  const existingUser = req.body;
  const isValid = await validateInputLogin(existingUser);
  if (!isValid) 
  {
    return res.status(400).send(
      {
      error: "Request body was invalid.",
      }
    );
  }

  User.findOne({email: existingUser.email})
    .then(function(data)
    {
      if(!data)
      {
        res.status(400).send(
          {
            error: "Invalid user email or password"
          });
      } else
      {
        bcrypt.compare(existingUser.password, data.password, function(err, result)
        {
          if(!result)
          {
              res.status(400).send(
              {
                error: "Invalid user email or password"
              });            
          } else
          {
            
          }
        });
      }
    });

}

module.exports = 
{
    createNewUser,
    login
};