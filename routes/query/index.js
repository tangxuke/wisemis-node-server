var express=require('express')
var router=express.Router();
var mysql=require('../../utils/mysql')
var response=require('../../utils/response')

router.post('/',function(req,res){
    var sql=req.body.sql;
    var params=req.body.params;
    var database=req.body.database;

    if(!sql || !Array.isArray(params) || !database){
        res.json(response.error('参数不足！'));
        return;
    }

    mysql(sql,params,database)
    .then(value=>{
        res.json(response.success(value));
    })
    .catch(reason=>{
        res.json(response.error(reason.message));
    })
})

module.exports=router;