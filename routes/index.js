var express = require('express');
var router = express.Router();

var users = require('./users')
var menus = require('./menus')
var models = require('./models')
var query = require('./query')
var upload = require('./upload');

//用户相关路由
router.use('/users', users)

//菜单相关路由
router.use('/menus', menus)

//业务模型相关路由
router.use('/models', models)

//查询数据相关路由
router.use('/query', query);

//上传文件相关路由
router.use('/upload', upload);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;