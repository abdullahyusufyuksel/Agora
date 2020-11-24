const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('../config/config.js');
const morgan = require('morgan');
const Router = require('./Router.js');
const app = express();

// Logging
app.use(morgan('dev'));

// Middleware
app.use(express.json());

// Connect to Atlas
mongoose.connect(config.URI)
    .then(function()
    {
        console.log("Connected to MongoDB");
    })
    .catch(error => console.log(error));

// Passport Initialization
app.use(passport.initialize());

// Pass in global config for passport
require('../config/passport.js')(passport);

// Router for everything
app.use('/', Router);

app.listen(config.PORT, function() 
{
     console.log(`App now listening on port ${config.PORT}`)
});
