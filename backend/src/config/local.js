var passport = require('passport');
const connection = require('../database/connection');
const LocalStrategy = require('passport-local').Strategy;

    const passport = require('passport');
    const LocalStrategy = require('passport-local');
    const connection = require('../database/connection');
    const authHelpers = require('./_helpers');
    const init = require('./passport');

    const options = {
        username:'name',
        password: 'password'
    };

   

    const verifyCallback = (username, password, done) => {

        connection('users').where({username}).first()
        .then((user)=>{
            if(!user){return done(null, false)}
            if (!authHelpers.comparePass(password, user.password)) {
                return done(null, false);
              } else {
                return done(null, user);
              }
        })
        .catch((err) => { return done(err); });

    }

    const strategy = new LocalStrategy(options, verifyCallback);

    init();
    passport.use(strategy);

    module.exports = passport;