const express = require('express');
const app = express();
const route = require('./routes');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/config');
const KnexSessionStore = require('connect-session-knex')(session);
const connection = require('./database/connection');


const store = new KnexSessionStore({
}); // defaults to a sqlite3 database



app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*/** Session SETUP */

app.use(session({
    secret:config.secret,
    resave:false,
    saveUninitialized: true,
    store:store,
    cookie:{
        maxAge: 1000 * 60 * 60 
    }
}))

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());




app.use(route);



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON PORT::", PORT);
})