const express=require('express');

const booksArray=require('../util/booksArray');


const booksRouter=express.Router();

booksRouter.get('/',(req,res)=>{
    res.render('books',{booksArray});
});
booksRouter.get('/addNewBook',(req,res)=>{
    res.render('addNewBook');
});
booksRouter.get('/:index',(req,res)=>{
    let index=req.params.index;
    res.render('singleBook',{book:booksArray[index]});
});


module.exports=booksRouter;