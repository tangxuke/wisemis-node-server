var express=require('express')
var router=express.Router()
var response=require('./../../utils/response')


/**
 * 获取字段列表
 */
var columns=require('./columns')
router.get('/columns/:modelName',columns)

/**
 * 错误的路由
 */
router.use(function(req,res,next){
    res.json(response.error('未定义的路由，请检查！'+req.originalUrl))
})

module.exports=router