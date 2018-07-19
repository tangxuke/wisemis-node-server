var express = require('express');
var router = express.Router();
var User=require('./../models/user')
var sha1=require('sha1')



var response={
  success:false,
  message:'',
  result:null
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

//登录
router.post('/login',(req,res,next)=>{
  req.body.password=sha1(req.body.password)
  console.log(req.body)
  User.findOne({username:req.body.username,password:req.body.password})
    .then((doc)=>{
      if(doc){
        //用户信息写入session
        console.log('Login:'+doc.username)
        req.session.username=doc.username
        
        console.log('session:'+JSON.stringify(req.session))

        res.json({
          success:true,
          message:'',
          result:null
        })
      }else{
        res.json({
          success:false,
          message:'用户不存在或密码错误！',
          result:null
        })
      }
    }).catch((error)=>{
      res.json({
          success:false,
          message:error.message,
          result:null
        })
    })
})

//注销
router.post('/logout',(req,res,next)=>{
  req.session.username=null
  res.json({
    success:true,
    message:'',
    result:null
  })
})

//添加用户
router.post('/add',function(req,res,next){
  req.body.password=sha1(req.body.password)
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
  req.body.password=sha1(req.body.password)
  User.findOneAndUpdate({'username':req.body.username},{'password':req.body.password})
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
            message:'用户不存在！',
            result:null
          })
        }
      }).catch((error)=>{
        res.json({
            success:false,
            message:error.message,
            result:null
          })
      })
})

//修改密码（用户），参数：用户名，旧密码，新密码
router.post('/change-pass',(req,res,next)=>{
  req.body.password=sha1(req.body.password)
  req.body['new-password']=sha1(req.body['new-password'])
  User.findOneAndUpdate({'username':req.body.username,'password':req.body.password},{'password':req.body['new-password']})
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
            message:'用户不存在或者旧密码错误！',
            result:null
          })
        }
      }).catch((error)=>{
        res.json({
            success:false,
            message:error.message,
            result:null
          })
      })
})

//删除用户
router.post('/del-user',(req,res,next)=>{
  User.findOneAndRemove({'username':req.body.username})
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
            message:'用户不存在！',
            result:null
          })
      }
    }).catch((error)=>{
      res.json({
            success:false,
            message:error.message,
            result:null
          })
    })
})

module.exports = router;
