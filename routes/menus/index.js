var express = require('express');
var router = express.Router();

var menu_list=require('./menu-list')
router.get('/menu-list',menu_list)

module.exports = router;