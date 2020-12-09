const express=require('express');
const BookRouter=express.Router();

function route(nav){    
    var Books=[
        {
            title:'Wings of Fire',
            author:'APJ Abdul Kalam',
            genre:'Autobiography',
            imag:'apj.jpg'
        },
        {
            title:'A Walk to Remember',
            author:'Nicholas Sparks',
            genre:'Drama',
            imag:'walk.jpg'
        },
        {
            title:'Othello',
            author:'William Shakespeare',
            genre:'Drama',
            imag:'othello.jpg'
        }
    ];

    BookRouter.get('/',function(req,resp){
        resp.render('books',{
            nav,
            title:'Books',
            page:'addbook',
            Books
        });
    });

    BookRouter.get('/addbook',function(req,resp){
        resp.render('addbook',{
            nav,
            title:'Add Book',
            page:'addbook'
        });
    });

    BookRouter.get('/:id',function(req,resp){
        const id=req.params.id;
        resp.render('book',{
            nav,
            title:'Book',
            page:'addbook',
            Book:Books[id]
        });
    });
    return BookRouter;
}

module.exports=route;