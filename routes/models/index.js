var express=require('express')
var router=express.Router()
var response=require('./../../utils/response')
var Model=require('../../models')

/**
 * 获取模型操作
 */
router.use('/:modelName/:action',function(req,res,next){
    if(req.method!=='POST' && req.method!=='GET'){
        res.send(200);
        return;
    }

    Model(req.params.modelName,req.params.action,{...req.body,...req.query})
        .then(value=>{
            res.json(response.success(value))
        })
        .catch(err=>{
            res.json(response.error(err.message))
        })
})

/**
 * 获取模型对象
 */
router.use('/:modelName',function(req,res,next){
    var model=require('./../../models/business/'+req.params.modelName)();
    res.json(response.success(model))
})

/**
 * 错误的路由
 */
router.use(function(req,res,next){
    res.json(response.error('路由格式错误，正确格式：/models/:modelName/:action，当前路由：'+req.originalUrl))
})

module.exports=router