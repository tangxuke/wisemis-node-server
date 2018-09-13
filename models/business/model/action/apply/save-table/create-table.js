var Model=require('./../../../../../model')
var Field=require('./../../../../../model/field')
var mysql=require('./../../../../../../utils/mysql')

/**
 * 修改表结构
 * @param {Model} model 
 * @returns {Promise}
 */
function CreateTable(model){
    return new Promise(function(resolve,reject){
        var sql='create table `'+model.TableName+'` (';
        var fields=model.getFields().map(field=>{
            return '`'+field.Name+'` '+field.getSQLType()+' null';
        }).join(',');
        sql+=fields+')';
        mysql(sql,[],model.Database)
        .then(value=>{
            resolve(value);
        })
        .catch(reason=>{
            reject(reason);
        });
    });
}

module.exports=CreateTable;