var Model=require('../..')
var mysql=require('../../../../utils/mysql')

/**
 * 修改表结构
 * @param {Model} model 
 * @returns {Promise<boolean>}
 */
function CreateTable(model){
    /**
     * TODO:自动加id列、创建时间、创建人、修改人、修改时间、日志列等系统预定义列
     */
    return new Promise(function(resolve,reject){
        var sql='create table `'+model.TableName+'` (';
        var keys='';
        var fields=model.getFields().map(field=>{
            if(field.IsKey){
                keys+=',`'+field.Name+'`';
            }
            return '`'+field.Name+'` '+field.getSQLType()+(field.IsNotNull?' not null':' null')+' COMMENT '+`'${field.Title}'`;
        }).join(',');
        if(keys.length>0){
            keys=keys.substr(1);
            fields+=',PRIMARY KEY ('+keys+')';
        }
        sql+=fields+');';

        mysql(sql,[])
        .then(value=>{
            resolve(true);
        })
        .catch(reason=>{
            reject(reason);
        });
    });
}

module.exports=CreateTable;