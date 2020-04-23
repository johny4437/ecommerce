const mongoose = require('mongoose');
require('dotenv').config({path:'./src/config/.env'});
const uri = "mongodb+srv://ecommerce:vanhelsing123@cluster0-hyyla.mongodb.net/test?retryWrites=true&w=majorit";


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;