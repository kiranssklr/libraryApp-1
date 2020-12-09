const express=require('express');
const signupRouter=express.Router();
function route(nav){
    signupRouter.get('/',function(req,resp){
        resp.render('signup',{
            nav,
            title:"Sign Up"
        }); 
    });
    return signupRouter;
}
module.exports=route;