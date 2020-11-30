var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config.js');
const User = require("../server/models/userModel.js");

// Passing in options for jwt strategy
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

module.exports = (passport) =>
{
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) 
    {
        User.findOne({_id: jwt_payload.id}, function(err, user) 
        {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            }
        });
    }));    
}
