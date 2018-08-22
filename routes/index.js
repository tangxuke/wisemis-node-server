var express = require('express');
var router = express.Router();

var users=require('./users')
var menus=require('./menus')
var models=require('./models')

//用户相关路由
router.use('/users',users)

//菜单相关路由
router.use('/menus',menus)

//业务相关路由
router.use('/models',models)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
