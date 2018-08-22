var response=require('./../../utils/response')
var fs=require('fs')

/**
 * 获取模型的表格定义
 */
function GetTableJson(req,res){
    var modelName=req.params.modelName;
    var pathName=`./../../models/${modelName}`
    if(!fs.existsSync(pathName)){
        res.json(response.error('模型对象不存在'));
        return;
    }
    var Model=require()
    res.json(response.success(Model))
}

module.exports=GetTableJson;