//通用操作MongoDB功能
var mongoose=require('mongoose')
var express=require('express');
var router=express.Router();

var GetModel=require('./../models/custom-model');

var CustomModel;
//新建记录
router.post('/:model/new',(req,res,next)=>{
    var p=GetModel(req.params.model);

    p.then((value)=>{
        value.create(req.body)
            .then((doc)=>{
                res.json({
                    success:true,
                    message:'',
                    result:doc
                })
            })
            .catch((err)=>{
                res.json({
                    success:false,
                    message:err.message,
                    result:null
                })
            })
    })
    .catch((error)=>{
        res.json({
            success:false,
            message:error.message,
            result:null
        })
    })
    
})

//读取数据
router.get('/:model',(req,res,next)=>{
    var p=GetModel(req.params.model);
    p.then((value)=>{
        value.find().then((docs)=>{
            res.json({
                success:true,
                message:'',
                result:docs
            })
        })
        .catch((error)=>{
            res.json({
                success:false,
                message:'1'+error.message,
                result:null
            })
        })
    }).catch((err)=>{
        res.json({
                success:false,
                message:'2'+err.message,
                result:null
            })
    })
        
})

module.exports=router