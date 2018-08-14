var express = require('express');
var router = express.Router();

var login=require('./login');
//var logout=require('./logout');
//var change_password=require('./change_password');

router.post('/login',login)
//router.post('/logout',logout);
//router.post('/change-pass',change_password);

module.exports = router;