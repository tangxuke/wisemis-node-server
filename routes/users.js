var express = require('express');
var router = express.Router();
var User=require('./../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/about',function(req,res,next){
  res.send({'test':'hello'});
})

var response={
  success:false,
  message:'',
  result:[]
}

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

module.exports = router;
