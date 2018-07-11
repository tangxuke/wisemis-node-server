var express=require('express')
var router = express.Router()
var Menu=require('../models/menu')

var response={
    success:false,
    message:'',
    result:null
}

//获取菜单列表
router.get('/',function(req,res,next){
    Menu.find({},(err,docs)=>{
        if(err){
            response.message=err.message
        }else{
            response.success=true
            response.result=docs
        }
        res.json(response)
    })
})

//添加菜单
router.post('/add',(req,res,next)=>{
    console.log(req.body)
    var menu=new Menu(req.body)
    menu.save().then(()=>{
        response.success=true
    }).catch((err)=>{
        response.message=err.message
    }).then(()=>{
        res.json(response)
    })
})

module.exports=router