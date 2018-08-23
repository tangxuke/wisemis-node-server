var response=require('./../../utils/response')
var fs=require('fs')
var path=require('path')


/**
 * 获取模型的表格定义
 */
function GetFormJson(req,res){
    var modelName=req.params.modelName;
    var pathName=`../../models/${modelName}.js`
    pathName=path.join(__dirname,pathName)
    console.log(pathName)
    if(!fs.existsSync(pathName)){
        res.json(response.error('模型对象不存在'));
        return;
    }
    var Model=require(pathName)
    res.json(response.success(Model))
}

module.exports=GetFormJson;