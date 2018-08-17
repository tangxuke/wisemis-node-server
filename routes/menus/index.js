var express = require('express');
var router = express.Router();

var menu_list=require('./menu-list')
router.get('/menu-list',menu_list)

var menu_custom_list=require('./menu-custom-list')
router.get('/menu-custom-list',menu_custom_list)

module.exports = router;