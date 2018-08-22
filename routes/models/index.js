var express=require('express')
var router=express.Router()
var response=require('./../../utils/response')

/**
 * 获取表格定义
 */
var GetTableJson=require('./get-table-json')
router.get('/get-table-json/:modelName',GetTableJson)

/**
 * 获取表单定义
 */
var GetFormJson=require('./get-form-json')
router.get('/get-form-json/:modelName',GetFormJson)

//默认
router.use('/',function(req,res){
    res.json(response.error('请指定具体路由'))
})

module.exports=router