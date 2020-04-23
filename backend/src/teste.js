const express = require('express');
const app = express();
const Category = require('./models/categorySchema');



app.use(express.json());

 app.post('/',async (req,res)=>{
     const name = req.body;
    const book =  await Category.({ name });

    res.json(book)

 })

 app.listen(4000);

