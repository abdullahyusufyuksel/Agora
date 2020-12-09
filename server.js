const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/config.js');
const morgan = require('morgan');
const Router = require('./server/Router.js');
const app = express();
const cors = require('cors');
const path = require('path');

// Logging
app.use(morgan('dev'));

// Middleware
app.use(express.json());

// CORS handling 
app.use(cors());

// Connect to Atlas
mongoose.connect(config.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function()
    {
        console.log("Connected to MongoDB");
    })
    .catch(error => console.log(error));

// Passport Initialization
app.use(passport.initialize());

// Pass in global config for passport
require('./config/passport.js')(passport);

// Router for everything
app.use('/', Router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));