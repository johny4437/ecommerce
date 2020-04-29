const express = require('express');
const app = express();
const route = require('./routes');




app.use(express.json());


app.use(route);



const PORT = process.env.PORT || 3500;

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON PORT::", PORT);
})