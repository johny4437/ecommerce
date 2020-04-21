const express = require('express');
require('dotenv').config({path:'./src/config/.env'});
const app = express();
const route = require('./routes');


app.use(express.json());


app.use(route);


const PORT = process.env.PORT;
 app.listen(PORT, ()=>{
     console.log('SERVER IS RUNNING ON PORT ::', PORT);
 });