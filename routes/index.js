var express = require('express');
var router = express.Router();

var users=require('./users')

//用户相关路由
router.use('/users',users)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
