const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config.js');

const app = express();

// Middleware
app.use(express.json());

// Connect to Atlas
mongoose.connect(config.URI)
    .then(function()
    {
        console.log("Connected to MongoDB");
    })
    .catch(error => console.log(error));


app.listen(config.PORT, function() 
{
     console.log(`App now listening on port ${config.port}`)
});
