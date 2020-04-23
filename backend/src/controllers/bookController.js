const Book = require('../models/Book');


module.exports = {
    async index( req, res){

        const books = Book.find({}, function(err, docs){
            if(err){
                res.json("Erro to find a book");
            }else{
                res.json('There is noe rror');
            }
        });

        res.json({books});


    },
    async store(req, res){
        const{title, description, category, author, publisher, price, cover} = req.body;
     
        


       var newBook = new Book({
           title: title,
           description: description,
           category: category,
           author: author,
           publisher:publisher,
           price:price,
           cover:cover,
       });
        newBook.save(function(err){
            if(err){
                console.log(err);
            }
            res.json({message:"The book was saved."});
       });
    },
}