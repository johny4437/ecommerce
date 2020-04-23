
const mongoose = require('mongoose');

    const BookSchema = new mongoose.Schema({
        title:{
            type: String,
            require: true
        },
        description:{
            type: String
        },
        category:{
            type:String,
            require:true
        },
        author:{
            type:String,
            require:true
        },
        publisher:{
            type:String,
            require:true
        },
        price:{
            type: Number,
            require:true
        },
        cover:{
            type:String
        }
    });

 

 module.exports = mongoose.model('Book', BookSchema);