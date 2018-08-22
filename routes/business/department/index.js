var express=require('express')
var router=express.Router()

//获取部门列表
var departmentList=require('./get-department-list')
router.get('/department-list',departmentList)

//获取校区列表
var campusList=require('./get-campus-list')
router.get('/campus-list',campusList)

module.exports=router