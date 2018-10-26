var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var response = require('./../../utils/response')
var preview = require('./preview');
var path = require('path');

/**
 * 预览选定工作表前后10笔记录
 */
router.use('/preview', function(req, res) {

})

/**
 * 上传文件，返回工作表列表
 */
router.use('/', upload.single('myfile'), function(req, res) {
    if (req.method === 'OPTIONS') {
        res.send(200);
        return;
    }
    console.log(req.file);
    if (!req.file.originalname.toLowerCase().endsWith('xls') && !req.file.originalname.toLowerCase().endsWith('xlsx')) {
        res.json(response.error('文件类型不合法！'));
        return;
    }
    //发送表格列表供用户选择
    var pathname = path.join(__dirname, '../../', req.file.path);
    preview.SheetNames(pathname)
        .then(value => {
            res.json(response.success({
                filename: req.file.filename,
                sheets: value.join(',')
            }));
        })
        .catch(reason => {
            res.json(response.error(reason.message));
        })
});

module.exports = router;