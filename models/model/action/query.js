var Model = require('../index')
var mysql=require('../../../utils/mysql');

/**
 * 查询数据
 * @param {Model} model 模型对象
 * @param {object} data 表示查询的字段及值的对象，比如{name:'test',age:'30'}
 */
module.exports=function(model,data){
    var keyField=model.KeyField;
    var sql='select top 1 * from `'+model.TableName+'` where `'+keyField+'`=?';
    return mysql(sql,data[keyField],'demo');
}