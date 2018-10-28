var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var response = require('./../../utils/response')
var preview = require('./preview');
var path = require('path');
var fs=require('fs');
var Upload = require('./upload');

router.use('/upload/:model',function(req,res){
    if (req.method === 'OPTIONS') {
        res.send(200);
        return;
    }
    var model=req.params.model;
    var filename=req.body.filename;
    var sheetName=req.body.sheetName;
    var pathname=path.join(__dirname,'../../uploads',filename);
    var relations=req.body.relations;

    preview.GetData(pathname,sheetName)
    .then(data=>{
        Upload(model,relations,data)
        .then(value=>{
            //导入成功，删除临时文件
            fs.unlink(pathname,err=>{
                console.log(err);
            })
            res.json(response.success(value));
        })
        .catch(reason=>{
            res.json(response.error(reason.message));
        });
    })
    .catch(reason=>{
        res.json(response.error(reason.message));
    });
})

/**
 * 预览选定工作表前后10笔记录
 */
router.use('/preview', function(req, res) {
    if (req.method === 'OPTIONS') {
        res.send(200);
        return;
    }
    var filename=req.body.filename;
    var sheetName=req.body.sheetName;
    var pathname=path.join(__dirname,'../../uploads',filename);
    preview.Preview(pathname,sheetName)
    .then(value=>{
        res.json(response.success(value));
    })
    .catch(reason=>{
        res.json(response.error(reason.message));
    })
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