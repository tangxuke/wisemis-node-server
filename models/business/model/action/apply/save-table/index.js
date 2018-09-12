var Model=require('../models/model')
var mysql=require('./mysql')

/**
 * 根据模型定义建表
 * @param {Model} model 
 * @returns {Promise}
 */
function CreateTable(model){
    var tablename=model.TableName;
    var database=model.Database;
    var fields=model.getFields();

    var checkTableExists=mysql(`select * from TABLES where TABLE_SCHEMA='${database}' and TABLE_NAME='${tablename}'`,[],'information_schema');
    checkTableExists.then(value=>{
        if(value.results.length==0){

        }
    })
}

/**
 * 
 * @param {Model} model 
 */
function CreateNewTable(model){

}