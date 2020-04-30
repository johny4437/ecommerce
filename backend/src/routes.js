const express = require('express');
const route = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/SessionController');
const auth = require('./middlewares/auth');

//Session
route.post('/users/login', sessionController.login);
//Middleware Authentication
route.use(auth);
//USERS ROUTE

route.post('/users', userController.store);
route.delete('/users/:id', userController.delete);
route.get('/users', userController.index);

//Products Route
route.post('/products', productController.store);
route.get('/products', productController.index);
route.delete('/products/:id', productController.delete);


module.exports = route;