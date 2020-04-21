const Book = require('../models/bookSchema');


module.exports = {
    async index( req, res){

        const books = Book.findAll({}, function(err, docs){
            if(err){
                res.json("Erro to find a book");
            }else{
                res.json('There is noe rror');
            }
        });

        res.json(books);


    },
    async addBook(req, res){
        const{title, description, category, author, publisher, price, cover} = req.body;

       const data =  Book.insertMany({
            title,
            description,
            category,
            author,
            publisher,
            price,
            cover
        });

        res.json(data);
    },
}