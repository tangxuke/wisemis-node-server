//通用操作MongoDB功能
var mongoose=require('mongoose')
var express=require('express');
var router=express.Router();

var GetModel=require('./../models/custom-model');

//删除记录
router.post('/:model/del',(req,res,next)=>{
    var p=GetModel(req.params.model);

    p.then((value)=>{
        value.deleteOne({'_id':req.body._id})
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

//修改记录
router.post('/:model/edit',(req,res,next)=>{
    console.log(req.body)
    var p=GetModel(req.params.model);

    p.then((value)=>{
        value.updateOne({'_id':req.body._id},req.body.data)
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

//新建记录
router.post('/:model/new',(req,res,next)=>{
    var p=GetModel(req.params.model);

    p.then((value)=>{
        value.create(req.body.data)
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