/**
 * 组件路由
 */

 var express=require('express');
 var router=express.Router();

 router.use('/components/:component',function(req,res){
    var component=require(`./${req.params.component}`)
    
 })