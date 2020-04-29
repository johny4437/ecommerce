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
        const hash = saltHash.hash;
        const name = request.body.name;
        const email = request.body.email;

       
        await connection('users').select('name')
                    .where('name', name).andWhere('email', email)
                    .then((userNameList) =>{
                        if(userNameList.length === 0){
                            return connection('users')
                            .returning('id')
                            .insert([{
                                name: name,
                                email: request.body.email,
                                password: hash,
                            }])
                            .then(() => {
                                console.log("User Inserted");
                            });
                        }
                        console.log("User already exists")
                        
                    });        
        
           
       

        
        response.json("Inserted Sucessfully");
    },

    async delete(request, response){
        const { id }  = request.params;
        await connection('users').where('id', id).delete();
        response.status(200).send();
    }

}