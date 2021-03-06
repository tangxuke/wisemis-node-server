var Model = require('../..')
var mysql = require('../../../../utils/mysql')
var ExportData = require('./export')
var page = {
        current: 1, //当前页
        pagesize: 10 //每页条数
    }
    /**
     * 获取实体数据
     * @param {Model} model 模型对象
     * @param {{export:boolean,where:any,query:[string],current:number,pagesize:number}} data 参数对象
     * @returns {Promise}
     */
module.exports = function(model, data) {
    console.log(data);
    return new Promise(function(resolve, reject) {
        var fields = model.getFields().map(item => {
            if (data.export) {
                return (item.FieldExpr ? item.FieldExpr : '`' + item.Name + '`' + ' as `' + item.Title + '`');
            }
            return (item.FieldExpr ? item.FieldExpr + ' as `' + item.Name + '`' : '`' + item.Name + '`');
        }).join(',');
        var sql = 'select ' + fields + ' from ' + model.TableName;
        var values = [];
        var where = [];
        if (data.where) {
            var where1 = Object.keys(data.where).map(item => {
                values.push(data.where[item]);
                return '`' + item + '`=?';
            });
            where.push(...where1);
        }
        if (Array.isArray(data.query) && data.query.length > 0) {
            where.push(data.query);
        }
        if (where.length > 0) {
            sql += ' where ' + where.map(item => {
                return '(' + item + ')';
            }).join(' and ');
        }
        if (model.OrderBy) {
            sql += ' order by ' + model.OrderBy;
        }
        if (data.current && data.pagesize)
            sql += ` limit ${(data.current-1)*data.pagesize},${data.pagesize}`;

        console.log(sql);

        mysql(sql, values).then(value => {
            //是否导出
            if (data.export) {
                ExportData(value.results)
                    .then(value => {
                        resolve(value);
                    })
                    .catch(reason => {
                        reject(reason);
                    })
            } else {
                resolve(value.results);
            }
        }).catch(reason => {
            reject(reason);
        })
    })

}