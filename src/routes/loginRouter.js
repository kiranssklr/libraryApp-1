const express=require('express');
const loginRouter=express.Router();
function route(nav){
    loginRouter.get('/',function(req,resp){
        resp.render('login',{
            nav,
            title:'Login'            
        });
    });
    return loginRouter;
}
module.exports=route;