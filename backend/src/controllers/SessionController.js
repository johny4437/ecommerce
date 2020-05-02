const connection  = require('../database/connection');
const compare = require('../lib/passwordUtils').comparePass;

const authConfig = require('../config/auth');

const jwt = require('jsonwebtoken');



module.exports = {
 async login(request, response, next){
     const{email, password} = request.body;

        // const user = await  connection('users')
        //     .where('email', email)
        //     .select('password','id', 'name')
        //     .first();
           
            
        //     if(!(compare(password, user.password))){

        //         response.json({error:"password doesn't match"});
        //     }

        //     const {id, name} = user;
            

            // response.json({
            //     user:{
                    
                    
            //         email,
            //         password
            //     }
            // })
            
 }
}