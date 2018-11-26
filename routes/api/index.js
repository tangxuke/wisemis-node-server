var express=require('express');
var router=express.Router();

var schools=require('./schools');
router.use('/schools',schools);

module.exports=router;