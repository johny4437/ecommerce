const mongoose = require('mongoose');

var categoryModel =  function(){
    const categorySchema = mongoose.Schema({
        name: String
    });

    return mongoose.model('Category', categorySchema);
}

 module.exports = new categoryModel();