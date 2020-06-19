const express=require('express');

const authorsArray=require('../util/authorsArray');


const authorsRouter=express.Router();

authorsRouter.get('/',(req,res)=>{
    res.render('authors',{authorsArray});
});

module.exports=authorsRouter;