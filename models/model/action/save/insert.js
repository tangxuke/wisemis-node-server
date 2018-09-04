var Model=require('../../index')
var Field=require('../../field/index')
var mysql=require('../../../../utils/mysql')

/**
 * 执行插入操作
 * @param {Model} model 模型对象
 * @param {Field[]} data 数据对象
 */
function insertFn(model,data){
    console.log('insert');

    var sql='insert into `'+model.TableName+'`(';
    var insertFields=[];
    var insertValues=[];
    data.forEach(item=>{
        if(item.IsInsert){
            insertFields.push('`'+item.Name+'`');
            insertValues.push(item.Value);
        }
    });
    var sql1='',sql2='';
    sql1=insertFields.join(',')
    sql2=insertFields.map(item=>{return '?'}).join(',');
    sql+=sql1+') values ('+sql2+')';
    
    return mysql(sql,insertValues,model.Database);
}

module.exports=insertFn;