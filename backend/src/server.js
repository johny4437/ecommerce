const express = require('express');
const app = express();
const route = require('./routes');
const passport = require('passport');
var session = require('express-session');
const connection = require('./database/connection');

const KnexSessionStore = require("connect-session-knex")(session);
const store = new KnexSessionStore({
  knexConnection: connection,
  tablename:'sessions'
}); // defaults to a sqlite3 database

require('./config/passport');
app.use(express.json());



// trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave:false,
    saveUninitialized:true,
    store: store,
    cookie: {
      maxAge: 30000  * 60// 30 seconds for testing
    }
  })
);
var count = 0;

app.get("/", function(req, res, next) {
  var n = req.session.views || 0;
  req.session.views = ++n;
  res.end(n + " views");
});

 app.use(passport.initialize());
 app.use(passport.session());
app.use(route);



const PORT = process.env.PORT || 3400;

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON PORT::", PORT);
})