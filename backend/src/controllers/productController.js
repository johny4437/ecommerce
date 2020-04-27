const connection  = require('../database/connection');
module.exports ={
    async store(request, response){

        const{ title, description, category, price} = request.body;

       await  connection('products').insert({
            title,
            description, 
            category, 
            price
        });

        return response.json({ title });
    },

    async index(request, response){
        const products = await connection('products').select('*');
        return response.json(products);
    },

    async delete(request, response){
        const { id } = request.params;
       await connection('products').where('id', id).delete();

       return response.status(200).send();



    }
}