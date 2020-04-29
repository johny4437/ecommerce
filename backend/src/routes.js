const express = require('express');
const route = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/SessionController');

route.post('/products', productController.store);
route.get('/products', productController.index);
route.delete('/products/:id', productController.delete);

//USER ROUTE
//route.post('/users/singup',passport.authenticate('local.signup'));
route.post('/users', userController.store);
route.delete('/users/:id', userController.delete);
route.post('/users/login', sessionController.login);
route.get('/users', userController.index);
module.exports = route;