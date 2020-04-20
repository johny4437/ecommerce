const express = require('express');
require('dotenv').config({path:'./src/config/.env'});
const app = express();
const route = require('./routes');
const session = require('express-session');
const  { expressValidator }  = require('express-validator');

app.use(express.json());
app.use(route);
//EXPRESS  SESSION MIDDLEWARE
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
 (req, res, next) =>{
    app.use(expressValidator({
        errorFormatter:function(param, msg, value){
            var nameSpace = param.slpit('.'),
            root = nameSpace.shift(),
            formParam = root;
    
            while(nameSpace.length){
                formParam  += '[' + nameSpace.shift() + ']';
            }
    
            return{
                param:formParam,
                msg:msg,
                value:value
            };
    
        }
    }))
    
}

const PORT = process.env.PORT;
 app.listen(PORT, ()=>{
     console.log('SERVER IS RUNNING ON PORT ::', PORT);
 });