var Model = require('../index')
var mysql=require('../../../utils/mysql');

/**
 * 保存数据（目前暂时只支持新建）
 * @param {Model} model 
 * @param {object} data 
 */
module.exports=function(model,data){
    var insertFields=[],insertValues=[];
        model.Fields.forEach(item=>{
            if(item.IsInsert){
                insertFields.push(item.Name);
                insertValues.push(data[item.Name]);
            }
            
        });
        var sql='insert into `'+model.TableName+'`('+insertFields.join(',')+') values ('+insertFields.map(item=>{return '?'}).join(',')+');';
        return mysql(sql,insertValues,model.Database);
}