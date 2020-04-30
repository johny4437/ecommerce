const express = require('express');
const route = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/SessionController');
const auth = require('./middlewares/auth');
const cartController = require('./controllers/cartController');

//Session
route.post('/users/login', sessionController.login);
//Middleware Authentication
route.use(auth);
//USERS ROUTE

route.post('/users', userController.store);

//cart router
route.post('/cart/:id', cartController.create);
route.get('/cart', cartController.index);
//administrator routers

route.delete('/users/:id', userController.delete);
route.get('/users', userController.index);

// add Products 
route.post('/admin/products', productController.store);
route.get('/admin/products', productController.index);
route.delete('/admin/products/:id', productController.delete);


module.exports = route;