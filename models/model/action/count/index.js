var Model=require('../../index')
var mysql=require('../../../../utils/mysql')
/**
 * 获取记录总数
 * @param {Model} model 
 * @param {any} data 
 */
module.exports=function(model,data){
    var sql='select count(*) as Count from `'+model.TableName+'`';
    return new Promise(function(resolve,reject){
        mysql(sql,[],model.Database)
        .then(value=>{
            resolve(value.results[0].Count);
        })
        .catch(reason=>{
            reject(reason);
        })
    });
}