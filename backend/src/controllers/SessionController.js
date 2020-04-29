const connection  = require('../database/connection');
const compare = require('../lib/passwordUtils').comparePass;
const jwt = require('jsonwebtoken');


module.exports = {
 async login(request, response){
     const{email, password} = request.body;

        const user = await  connection('users')
            .where('email', email)
            .select('password','id', 'name')
            .first();
           
            
            if(!(compare(password, user.password))){

                response.json({error:"password doesn't match"});
            }

            const {id, name} = user;
            

            response.json({
                user:{
                    id,
                    name,
                    email
                },
                token:{

                }
            })
            
 }
}