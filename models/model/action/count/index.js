var Model=require('../../index')
var mysql=require('../../../../utils/mysql')
/**
 * 获取记录总数
 * @param {Model} model 
 * @param {any} data 
 */
module.exports=function(model,data){
    var sql='select count(*) as Count from `'+model.TableName+'`';
    var values=[];
    if(data.where){
        /**
         * where 格式
         * data:{
         * ...,
         * where:[{key:fieldName1,value:fieldValue1},{key:fieldName2,value:fieldValue2},...]
         * }
         */
        var where=data.where.map(item=>{
            values.push(item.value);
            return '`'+item.key+'`=?';
        }).join(' and ');
        sql+=' where '+where;
    }

    return new Promise(function(resolve,reject){
        mysql(sql,values,model.Database)
        .then(value=>{
            resolve(value.results[0].Count);
        })
        .catch(reason=>{
            reject(reason);
        })
    });
}