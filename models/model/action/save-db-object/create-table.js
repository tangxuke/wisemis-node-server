var Model=require('../..')
var mysql=require('../../../../utils/mysql')

/**
 * 修改表结构
 * @param {Model} model 
 * @returns {Promise<boolean>}
 */
function CreateTable(model){
    return new Promise(function(resolve,reject){
        var sql='create table `'+model.TableName+'` (';
        var keys='';
        var fields=model.getFields().map(field=>{
            if(field.IsKey){
                keys+=',`'+field.Name+'`';
            }
            return '`'+field.Name+'` '+field.getSQLType()+' null COMMENT '+`'${field.Title}'`;
        }).join(',');
        if(keys.length>0){
            keys=keys.substr(1);
            fields+=',PRIMARY KEY ('+keys+')';
        }
        sql+=fields+');';

        console.log(sql);

        mysql(sql,[],model.Database)
        .then(value=>{
            resolve(true);
        })
        .catch(reason=>{
            reject(reason);
        });
    });
}

module.exports=CreateTable;