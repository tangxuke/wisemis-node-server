var Model = require('../index')
var mysql=require('../../../utils/mysql');

/**
 * 删除数据
 * @param {Model} model 模型对象
 * @param {object} data 包含主键的数据对象
 */
module.exports=function(model,data){
    var keyField=model.KeyField;
    var sql='delete from `'+model.TableName+'` where `'+keyField+'`=?';
    return mysql(sql,data[keyField],'demo');
}