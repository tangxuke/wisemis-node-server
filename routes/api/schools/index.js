var express=require('express');
var router=express.Router();

var mysql=require('./../../../utils/mysql');
var response=require('./../../../utils/response');

router.get('/list',function(req,res){
    var sql=`select name from department where type='2' order by name`;
    mysql(sql)
    .then(value=>{
        res.json(response.success(value.results));
    })
    .catch(reason=>{
        res.json(response.error(reason.message));
    });
});

module.exports=router;