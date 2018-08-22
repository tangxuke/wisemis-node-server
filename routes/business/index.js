var express=require('express')
var router=express.Router()
var response=require('./../../utils/response')

//部门
var department=require('./department')
router.use('/department',department)

//默认
router.use('/',function(req,res){
    res.json(response.error('请指定具体路由'))
})

module.exports=router