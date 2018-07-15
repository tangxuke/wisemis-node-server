var express = require('express');
var router = express.Router();
var User=require('./../models/user')


var response={
  success:false,
  message:'',
  result:[]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({},'username').sort({'username':'asc'}).then((docs)=>{
    response.success=true;
    response.message='';
    response.result=docs;
  }).catch((err)=>{
    response.success=false;
    response.message=err.message;
  }).then(()=>{
    res.json(response);
  })
});

router.post('/add',function(req,res,next){
  
  User.findOne({'username':req.body.username})
    .then((doc)=>{
      if(doc){
        response.success=false;
        response.message='用户已存在！'
        res.json(response);
      }else{
        User.create(req.body).then((value)=>{
          response.success=true;
          response.message=''
        }).catch((err1)=>{
          response.success=false;
          response.message=err1.message;
        }).then(()=>{
          res.json(response);
        })
      }
    }).catch((err)=>{
      response.success=false;
      response.message=err.message;
      res.json(response);
    })
})

//修改密码（管理员）,参数：用户名，新密码
router.post('/change-pass-admin',(req,res,next)=>{
  response.success=false;
  response.message='功能尚未实现';
  res.json(response);
})

//修改密码（用户），参数：用户名，旧密码，新密码
router.post('/change-pass',(req,res,next)=>{
  response.success=false;
  response.message='功能尚未实现';
  res.json(response);
})

module.exports = router;
