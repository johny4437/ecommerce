
const mongoose = require('mongoose');
var bookModel =  function(){
    const BookSchema = mongoose.Schema({
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

    return mongoose.model('Book', BookSchema);
}

 module.exports = new bookModel();