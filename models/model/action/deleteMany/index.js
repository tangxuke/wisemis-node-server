var Model = require('../..')
var mysql = require('../../../../utils/mysql-batch');

/**
 * 删除数据
 * @param {Model} model 模型对象
 * @param {[object]} data 包含主键的数据对象
 * @returns {Promise}
 */
module.exports = function (model, data) {
    console.log(data);
    if(!Array.isArray(data.data) || data.data.length===0){
        return Promise.reject(new Error('没有待删除记录！'));
    }

    var keys = model.getFields().filter(item=>{
        return item.IsKey;
    }).map(item=>{
        return item.Name;
    });

    if (keys.length == 0) {
        return Promise.reject(new Error('没有设定主键字段！'));
    }

    var where = keys.map(item => {
        return '`'+item+'`=?';
    }).join(' and ');

    var sql=data.data.map(item=>{
        return 'delete from `'+model.TableName+'` where '+where;
    }).join(';');
    var values=[];
    data.data.forEach(item=>{
        keys.forEach(key=>{
            values.push(item[key]);
        });
    });

    console.log(sql);
    console.log(values);

    return mysql(sql, values);
}