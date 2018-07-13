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

//获取子菜单列表
router.get('/children/:parent',function(req,res,next){
    Menu.findOne({name:req.params.parent},(err,doc)=>{
        if(err){
            response.success=false
            response.message=err.message;
        }else{
            if(doc){
                response.success=true;
                response.result=doc.children;
            }else{
                response.success=false
                response.message='菜单不存在！'
            }
            
        }
        res.json(response);
    })
})

//删除菜单
router.post('/del',(req,res,next)=>{

    var parent=req.body.parent,
        name=req.body.name;
    if(parent){
        Menu.update({'name':parent}
        ,{
            $pull:{
                'children':{
                    'name':name
                }
            }
        }
        ,(err,doc)=>{
            callback(err,doc,res)
        })
    }else{
        Menu.deleteOne({'name':name},(err,doc)=>{
            callback(err,doc,res)
        })
    }
})

function callback(err,doc,res){
    if(err){
        response.success=false
        response.message=err.message
    }else{
        response.success=true
    }
    res.json(response)
}

//修改菜单
router.post('/edit',(req,res,next)=>{
    var parent=req.body.parent;
    var name=req.body.name;
    var title=req.body.title;
    var path=req.body.path;
    var icon=req.body.icon;

    if(parent){
        Menu.update(
            {'name':parent,'children.name':name},
            {
                'children.$.title':title,
                'children.$.path':path,
                'children.$.icon':icon
            },(err,doc)=>{
                if(err){
                    response.success=false
                    response.message=err.message
                }else{
                    response.success=true
                }
                res.json(response)
            }
        )
    }else{
        Menu.update(
            {'name':name},
            {
                'title':title,
                'path':path,
                'icon':icon
            },(err,doc)=>{
                if(err){
                    response.success=false
                    response.message=err.message
                }else{
                    response.success=true
                }
                res.json(response)
            }
        )
    }
})

//添加菜单
router.post('/add',(req,res,next)=>{
    
    var parent=req.body.parent;
    if(parent){
        Menu.findOne({name:parent},(err,doc)=>{
            if(err){
                response.message=err.message;
            }else{
                doc.children.push({
                    name:req.body.name,
                    title:req.body.title,
                    icon:req.body.icon,
                    path:req.body.path
                });
                doc.save().then(()=>{
                    response.success=true;
                }).catch((err)=>{
                    response.message=err.message;
                })
            }
            res.json(response);
        })

    }else{
        var menu=new Menu({
            name:req.body.name,
            title:req.body.title,
            icon:req.body.icon,
            path:req.body.path
        })
        menu.save().then(()=>{
            response.success=true
        }).catch((err)=>{
            response.message=err.message
        }).then(()=>{
            res.json(response)
        })
    }
    
})

module.exports=router