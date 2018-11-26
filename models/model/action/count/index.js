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
    var where=[];
    if(data.where){
        var where1=Object.keys(data.where).map(item=>{
            values.push(data.where[item]);
            return '`'+item+'`=?';
        });
        where.push(...where1);
    }
        if(Array.isArray(data.query) && data.query.length>0){

            where.push(data.query);
        }

        if(where.length>0){
            sql+=' where '+where.map(item=>{
                return '('+item+')';
            }).join(' and ');
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