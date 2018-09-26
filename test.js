const express = require('express')
const app = express()
var fs=require('fs')
var path=require('path')

/**
 * 查找符合的文件
 * @param {string} cPath 待搜索的文件或目录
 * @param {string} cXHTM 包含的序列号
 * @returns {string}
 */
function checkFile(cPath,cXHTM,cCPBH,callback){
    if(!fs.existsSync(cPath))
        return false;
    //检查当前文件是否包含给定序列号
    if(fs.statSync(cPath).isFile() && cPath.includes(cXHTM)){
        callback(cPath);
        return true;
    }
    var files=fs.readdirSync(cPath);
   //检查当前目录下是否存在包含序列号的文件
    var file1=files.find(file=>{
        return file.includes(cXHTM) && fs.statSync(path.join(cPath,file)).isFile();
    });
    if(file1){
        callback(path.join(cPath,file1));
        return true;
    }  

    //检查当前目录下是否存在包含xhtm的目录
    var files2=files.filter(file=>{
        return (file.includes(cXHTM) || file.includes(cCPBH)) && fs.statSync(path.join(cPath,file)).isDirectory();
    });
    files2.forEach(item=>{
        var file2=checkFile(path.join(cPath,item),cXHTM,cCPBH,callback);
        if(file2)
            return true;
    });

    //什么都没找到，返回空
    return false;
}

app.get('/:path/:cpbh/:xhtm', function(req, res){
    var searchPaths=req.params.path.replace(/`/g,'\\');
    var cpbh=req.params.cpbh;
    var xhtm=req.params.xhtm;

    var xml='<?xml version="1.0" encoding="UTF-8"?>';
    xml+='<result><success>?success</success><file>?file</file></result>'

    var dirs=searchPaths.split(',');
    var found=false;
    dirs.forEach(item=>{
        checkFile(item,xhtm,cpbh,function(file){
            found=true;
            xml=xml.replace('?success','true');
            xml=xml.replace('?file',file);
            res.send(xml);
        });
    });
    if(!found){
        xml=xml.replace('?success','false');
        xml=xml.replace('?file','找不到文件');
        res.send(xml);
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

