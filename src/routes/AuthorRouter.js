const express=require('express');
const AuthorRouter=express.Router();
const AuthorData=require('../model/authordata');

function route(nav){
    // var Author=[
    //     {
    //         name:'APJ Abdul Kalam',
    //         nation:'India',
    //         works:[
    //             "India 2020: A Vision for the New Millennium",
    //             "Wings of Fire: An Autobiography",
    //             "Ignited Minds: Unleashing the Power within India"
    //         ],
    //         img:'kalam.jpg'
    //     },
    //     {
    //         name:'Nicholas Sparks',
    //         nation:'USA',
    //         works:[
    //             "The Rescue",
    //             "A Bend in the Road",
    //             "The Notebook"
    //         ],
    //         img:'nicholas.jpg'
    //     },
    //     {
    //         name:'William Shakespeare',
    //         nation:'UK',
    //         works:[
    //             "Hamlet",
    //             "Macbeth",
    //             "Romeo and Juliet"
    //         ],
    //         img:'shakespeare.jpg'
    //     }
    // ];

    AuthorRouter.get('/',function(req,resp){
        AuthorData.find()
        .then(function(Author){
            resp.render('authors',{
                nav,
                title:'Authors',
                page:'addauthor',
                Author
            });       
        })
 
    });

    AuthorRouter.get('/addauthor',function(req,resp){
        resp.render('addauthor',{
            nav,
            title:'Add Author',
            page:'addauthor'
        });
    });

    AuthorRouter.get('/addauthor/add',function(req,resp){
        var authorItem={
            author: req.query.author,
            country:req.query.country,
            category:req.query.category,
            image:req.query.image
        }
        var author=AuthorData(authorItem);
        author.save();
        resp.redirect('/authors/addauthor');
    });

    AuthorRouter.get('/:id',function(req,resp){
        const id = req.params.id;
        AuthorData.findOne({_id:id})
        .then(function(Author){
            resp.render('author',{
                nav,
                title:"Author",
                page:'addauthor',
                Author
            });
        })
 
    });

    return AuthorRouter;
}

module.exports=route;