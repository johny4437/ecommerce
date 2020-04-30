const connection = require('../database/connection');

module.exports = {
    async index( request, response){
        const cart = request.session.cart;
        const displayCart = {item:[], total: 0 };
        const total = 0;

        for(var item in cart){
            displayCart.item.push(cart[item]);
            total += (cart[item].qty * cart[item].price);
        }
        displayCart.total = total;

        response.json({ cart: displayCart});
    },
    async create( request, response){
       
        
        const id = request.params.id;

       const book = await connection('products').where('id', id)
        .select('id', function(err, product){
            if(err) return response.json({error: "Erro to find product"})
            if(cart[request.params.id]){
                cart[request.params.id].qty++;
            }else{
                cart[request.params.id] = {
                    item: product.id,
                    desription: product.desription,
                    category: product.category,
                    price: product.price

                }
            }

            response.json(cart);
        })

        

    }
}