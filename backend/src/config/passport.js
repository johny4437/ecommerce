const passport = require('passport');
const connection = require('../database/connection');
const LocalStartegy = require('passport-local').Strategy;

const comparePass = require('../lib/passwordUtils').comparePass;


passport.serializeUser(function(user, done){
    done(null, user.id)
});
passport.deserializeUser(function(id, done){
    connection('users').where('id', id).select('id')
    .then(( user)=>{
        done( user)
    })
    .catch((err)=>{done(err)})
});


const customFields = {
    usernameField:'email',
    passwordField:'password'
}

const verifyCallback  = async (username, password, done)=>{
    await connection('users').where('email',username).first()
          .then((user)=>{
                if(!user){return done(null, false)}
                const isValid =  comparePass(password, user.password);
                if(isValid){
                    return done(null, user)
                }else{
                    return done(null, false)
                }
          })
          .catch((err)=> done(err));
}

const strategy = new LocalStartegy(customFields, verifyCallback);

passport.use(strategy);

module.exports = passport;