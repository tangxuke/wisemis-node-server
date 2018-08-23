var response=require('./../../utils/response')
/**
 * 模型的字段列表
 */
module.exports=function(req,res){
    var modelName=req.params.modelName
    var model=require(`./../../models/${modelName}`)
    res.json(response.success(model))
}