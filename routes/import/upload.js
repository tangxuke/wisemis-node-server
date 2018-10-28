var Model = require('./../../models/model/from-db');
var mysql = require('./../../utils/mysql');
var MySQL=require('mysql');
/**
 * 导入数据
 * @param {string} model 模型名称
 * @param {[{name:string,excel:string,isKey:boolean,isInsert:boolean,isUpdate:boolean}]} fields 
 * @param {[*]} data
 * @returns {Promise<boolean>} 
 */
function Upload(model, fields, data) {
    return Model(model)
        .then(theModel => {
            var tablename = theModel.TableName;
            var keyExpr = fields.filter(item => {
                return item.isKey;
            }).map(item => {
                return '`' + item.name + '`={' + item.excel + '}';
            }).join(' and ');
            var updateFields = fields.filter(item => {
                return item.isUpdate;
            }).map(item => {
                return '`' + item.name + '`={' + item.excel + '}';
            });
            var inserts = fields.filter(item => {
                return item.isInsert;
            });
            var insertFields = inserts.map(item => {
                return '`' + item.name + '`';
            }).join(',');
            var insertValues = inserts.map(item => {
                return '{' + item.excel + '}';
            }).join(',');

            var updateSQL = 'update `' + tablename + '` set ' + updateFields + ' where ' + keyExpr+';';
            var insertSQL = 'insert into `' + tablename + '`(' + insertFields + ') select ' 
                            + insertValues 
                            + ' from DUAL where not exists(select * from `'+tablename+'` where '+keyExpr+');';
            var sql=updateSQL+'\n'+insertSQL;
            var batchSQL='';
            batchSQL=data.map(item=>{
                var rowSQL=sql;
                Object.keys(item).forEach(key=>{
                    var fieldSQLValue=MySQL.escape(item[key]);
                    rowSQL=rowSQL.replace(RegExp('{'+key+'}','g'),fieldSQLValue);
                })
                return rowSQL;
            }).join('\n');

            return mysql(batchSQL);
        });

}

module.exports = Upload;