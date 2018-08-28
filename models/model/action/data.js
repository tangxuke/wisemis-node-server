var Model=require('../index')
var mysql=require('../../../utils/mysql')

/**
 * 获取实体数据
 * @param {Model} model 模型对象
 * @param {object} data 参数对象
 */
module.exports=function(model,data){
    return new Promise(function(resolve,reject){
        var sql='select * from '+model.TableName
        mysql(sql,[],model.Database).then(value=>{
            resolve(value.results);
        }).catch(reason=>{
            reject(reason);
        })
    })
    
}