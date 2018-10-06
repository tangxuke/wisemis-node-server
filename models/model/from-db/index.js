var mysql = require('../../../utils/mysql');
var Model = require('..');
var Field = require('./../field');
var Script = require('./../script');
var Action = require('./../operation');

/**
 * 从数据库中获取模型
 * @param {string} modelName 模型名称
 * @returns {Promise<Model>}
 */
function GetModel(modelName) {
    var model = new Model();
    /**模型对象Promise*/
    var p1 = mysql('select * from model where name=?', [modelName], 'wisemis')
        .then(value => {
            if (value.results.length === 0) {
                return Promise.reject(new Error('模板不存在'));
            } else {
                var row = value.results[0];
                model.setModelFromRow(row);
            }
        });

    /**模型字段列表Promise */
    var p2 = mysql('select * from model_fields where model_name=? order by orderid,field_name', [modelName], 'wisemis')
        .then(value2 => {
            if (!value2.results) {
                return Promise.reject(new Error('没有任何字段！'));
            }
            value2.results.forEach(row => {
                var field = new Field().setFieldFromRow(row);
                model.Fields.push(field);
            })
        });

    /**模型事件脚本Promise */
    var p3 = mysql('select * from model_scripts where model_name=?', [modelName], 'wisemis')
        .then(value3 => {
            value3.results.forEach(row => {
                var script = new Script().setScriptFromRow(row);
                model.Scripts.push(script);
            })
        });
    
    /**模型动作Promise */
    var p4 = mysql('select * from model_actions where model_name=? order by orderid', [modelName], 'wisemis')
        .then(value4 => {
            value4.results.forEach(row => {
                var action = new Action().setOperationFromRow(row);
                model.Actions.push(action);
            })
        });

    return Promise.all([p1, p2, p3, p4])
        .then(value => {
            //把字段相关的事件绑定到字段
            model.getScripts().forEach(ev=>{
                var oField=model.getFields().find(item=>{
                    return item.Name===ev.field;
                });
                if(oField){
                    oField.getScripts().push(ev);
                }
            });
            //把表单相关的时间绑定到表单
            model.getScripts().filter(ev=>{
                return ev.field==='<FORM>';
            }).forEach(ev=>{
                model.setFormScript(ev);
            });
            //把网格相关的时间绑定到表单
            model.getScripts().filter(ev=>{
                return ev.field==='<GRID>';
            }).forEach(ev=>{
                model.setGridScript(ev);
            });
            //设置自动获得焦点的字段
            if(!model.AutoFocusField){
                model.setAutoFocusField(model.getFields()[0].Name);
            }
            var autoFocusField=model.getFields().find(field=>{
                return field.Name===model.AutoFocusField;
            });
            if(!autoFocusField){
                autoFocusField=model.getFields()[0];
            }
            if(autoFocusField){
                autoFocusField.AutoFocus=true;
            }
            return Promise.resolve(model);
        });
}

module.exports = GetModel;