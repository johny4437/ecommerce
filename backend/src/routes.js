const express = require('express');
const route = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/SessionController');
// const auth = require('./middlewares/auth');
const cartController = require('./controllers/cartController');
const passport = require('passport');


//Session
route.post('/users/login', passport.authenticate('local', {failureRedirect:'/users/login-error', successRedirect:'/users/login-success'}));
route.get('/users/login', function(request, response, next){
    const form = '<h1>Login Page</h1><form method="POST" action="/users/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    response.send(form);
});



//Middleware Authentication
// route.use(auth);
//USERS ROUTE

route.post('/users',userController.store);

route.get('/users/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});
route.get('/users/login-error', (req, res, next)=>{
    res.send('<p>Error login</p>');
})
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