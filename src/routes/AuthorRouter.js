const express=require('express');
const AuthorRouter=express.Router();
function route(nav){
    var Author=[
        {
            name:'APJ Abdul Kalam',
            nation:'India',
            works:[
                "India 2020: A Vision for the New Millennium",
                "Wings of Fire: An Autobiography",
                "Ignited Minds: Unleashing the Power within India"
            ],
            img:'kalam.jpg'
        },
        {
            name:'Nicholas Sparks',
            nation:'USA',
            works:[
                "The Rescue",
                "A Bend in the Road",
                "The Notebook"
            ],
            img:'nicholas.jpg'
        },
        {
            name:'William Shakespeare',
            nation:'UK',
            works:[
                "Hamlet",
                "Macbeth",
                "Romeo and Juliet"
            ],
            img:'shakespeare.jpg'
        }
    ];

    AuthorRouter.get('/',function(req,resp){
        resp.render('authors',{
            nav,
            title:'Authors',
            page:'addauthor',
            Author
        });        
    });

    AuthorRouter.get('/addauthor',function(req,resp){
        resp.render('addauthor',{
            nav,
            title:'Add Author',
            page:'addauthor'
        });
    });

    AuthorRouter.get('/:id',function(req,resp){
        const id = req.params.id;
        resp.render('author',{
            nav,
            title:"Author",
            page:'addauthor',
            Author:Author[id]
        });
    });

    return AuthorRouter;
}

module.exports=route;