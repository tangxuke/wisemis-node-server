var Model = require('../..')
var mysql = require('../../../../utils/mysql');

/**
 * 删除数据
 * @param {Model} model 模型对象
 * @param {object} data 包含主键的数据对象
 * @returns {Promise}
 */
module.exports = function (model, data) {
    var keys = model.getFields().filter(item=>{
        return item.IsKey;
    }).map(item => {
        item.Value = data[item.Name];

        return item;
    });

    if (keys.length == 0) {
        return Promise.reject(new Error('没有设定主键字段！'));
    }
    var keyValues = keys.map(item => {
        return item.Value;
    });

    var where = keys.map(item => {
        return '`' + item.Name + '`=?';
    }).join(' and ');

    var sql = 'delete from `' + model.TableName + '` where ' + where;
    return mysql(sql, keyValues);
}