const mongoose = require('mongoose');
require('dotenv').config({path:'./src/config/.env'});
const uri = process.env.URI; 


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;