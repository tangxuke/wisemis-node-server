//通用操作MongoDB功能
var express=require('express');
var router=express.Router();
var CustomModel=require('./../models/model');


/**
 * 获取模型列表
 */
router.get('/',(req,res,next)=>{

    CustomModel.find().then((docs)=>{
        res.json({
            success:true,
            message:'',
            result:docs
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

/**
 * 查找某个模型列表
 */
router.get('/find/:name',(req,res,next)=>{

    CustomModel.findOne({name:req.params.name}).then((doc)=>{
        if(doc)
        {
            res.json({
                success:true,
                message:'',
                result:doc
            })
        }else
        {
            res.json({
                success:false,
                message:'架构不存在！',
                result:null
            })
        }
    })
    .catch((err)=>{
        res.json({
            success:false,
            message:err.message,
            result:null
        })
    })
})


/**
  * 创建架构
  * 参数：架构名，架构对象，集合名
  */
router.post('/new',(req,res,next)=>{

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

//修改架构（只修改内部架构代码）
router.post('/edit',(req,res,next)=>{

    CustomModel.updateOne({name:req.body.name},{schama:req.body.schama})
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

//删除架构（同时删除集合）
router.post('/del',(req,res,next)=>{
    var getModel=require('./../models/custom-model')
    getModel(req.body.name).then((model)=>{
        //删除集合
        model.collection.drop((err)=>{});      
    })
    //删除模板
    CustomModel.findOneAndRemove({name:req.body.name})
    .then((doc)=>{
        if(doc){
            res.json({
                success:true,
                message:'',
                result:null
            })
        }else{
            res.json({
                success:false,
                message:'模型不存在！',
                result:null
            })
        }
    }).catch((err)=>{
        res.json({
            success:false,
            message:error.message,
            result:null
        })
    })
})


//导出路由
module.exports=router;