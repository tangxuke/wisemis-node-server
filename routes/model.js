//通用操作MongoDB功能
var express=require('express');
var router=express.Router();
var CustomModel=require('./../models/model');
var GetModel=require('./../models/get-model');
/**
  * 创建架构
  * 参数：架构名，架构对象，集合名
  */
router.post('/Schama/new',(req,res,next)=>{

    CustomModel.create(req.body)
        .then((value)=>{
            res.json({
                        success:true,
                        message:'',
                        result:null
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

 //修改架构



//导出路由
module.exports=router;