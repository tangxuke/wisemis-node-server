//通用操作MongoDB功能
var mongoose=require('mongoose')
var express=require('express');
var router=express.Router();

var GetModel=require('./../models/custom-model');

//新建记录
router.post('/:model/new',(req,res,next)=>{
    var CustomModel=GetModel(req.params.model);

    CustomModel.create(req.body)
    .then((doc)=>{
            res.json({
                success:true,
                message:'',
                result:doc
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
    var CustomModel=GetModel(req.params.model);
    console.log(CustomModel)
        CustomModel.find().then((docs)=>{
            res.json({
                success:true,
                message:'',
                result:docs
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

module.exports=router