const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('../config/config.js');
const morgan = require('morgan');
const Router = require('./Router.js');
const app = express();
const cors = require('cors');
// const webpack = require('webpack');
// const configWebpack = require('./webpack.config.dev');

// var compiler = webpack(configWebpack);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

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
require('../config/passport.js')(passport);

// Router for everything
app.use('/', Router);

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });