var Model=require('../../../../../model')
var mysql=require('../../../../../../utils/mysql')
var CreateTable=require('./create-table')
var AlterTable=require('./alter-table')

/**
 * 根据模型定义建表
 * @param {Model} model 
 * @returns {Promise}
 */
function SaveTable(model){
    return new Promise(function(resolve,reject){
        var tablename=model.TableName;
        var database=model.Database;
        var fields=model.getFields();

        var checkTableExists=mysql(`select * from TABLES where TABLE_SCHEMA='${database}' and TABLE_NAME='${tablename}'`,[],'information_schema');
        checkTableExists.then(value=>{
            if(value.results.length==0){
                //表不存在，需要建表
                CreateTable(model)
                .then(value1=>{
                    resolve(value1);
                })
                .catch(reason1=>{
                    reject(reason1);
                })
            }else{
                //表已存在，比较字段
                AlterTable(model)
                .then(value2=>{
                    resolve(value2);
                })
                .catch(reason2=>{
                    reject(reason2);
                })
            }
        })
    })
    
}

module.exports=SaveTable;