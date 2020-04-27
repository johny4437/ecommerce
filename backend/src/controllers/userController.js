const connection  = require('../database/connection');
const passport = require('passport');
const createUser = require('../lib/passwordUtils').createUser;
module.exports = {

    async index(request, response){
        const user = await connection('users').select('*');

        response.json({user});
    },
    async store(request, response, next){
        const saltHash = createUser(request.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        const name = request.body.name;

       
        var user =  connection('users').where({name:name});
        if( user == name){

            response.json({message: "The user Already exist"});
        }else{
            await  connection('users')
            .insert({
                name: name,
                email: request.body.email,
                password: hash,
            })
        }
       

        
        response.json("Inserted Sucessfully");
    },

}