const express = require('express');
const route = express.Router();

const bookController = require('./controllers/bookController');

route.get('/books', bookController.index);
route.post('/books', bookController.store);

module.exports= route;