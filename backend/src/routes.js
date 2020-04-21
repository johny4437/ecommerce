const express = require('express');
const route = express.Router();

const bookController = require('./controllers/bookController');


route.post('/admin/book', bookController.addBook);

module.exports= route;