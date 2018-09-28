var mysql=require('../../../../../utils/mysql');
var Model=require('../../../../model');
var Field=require('../../../../model/field');
var fs=require('fs');
var path=require('path');
var SaveTable=require('./save-table')
var FieldFromRow=require('../../../../model/field/from-row')
var ScriptFromRow=require('../../../../model/script/from-row')

/**
 * 应用模板
 * @param {Object} data
 */
function Apply(data){
    var modelName=data.modelName;

    var model=new Model();

    /**模型对象Promise*/
    var p1=mysql('select * from model where name=?',[modelName],'wisemis')
        .then(value=>{
            if(value.results.length===0){
                return Promise.reject(new Error('模板不存在'));
            }else{
                var row=value.results[0];
                model.setName(row.name)
                .setTitle(row.title)
                .setTableName(row.tablename)
                .setDatabase(row.database)
                .setColumnCount(row.column_count)
                .setOrderBy(row.order_by);
            }
        });

    /**模型字段列表Promise */
    var p2=mysql('select * from model_fields where model_name=? order by orderid,field_name',[modelName],'wisemis')
        .then(value2=>{
            if(!value2.results){
                return Promise.reject(new Error('没有任何字段！'));
            }
            value2.results.forEach(row=>{
                var field=FieldFromRow(row);
                model.Fields.push(field);
            })
        });

    /**模型事件脚本Promise */
    var p3=mysql('select * from model_scripts where model_name=?',[modelName],'wisemis')
            .then(value3=>{
                value3.results.forEach(row=>{
                    var script=ScriptFromRow(row);
                    model.Scripts.push(script);
                })
            });

    return Promise.all([p1,p2,p3])
    .then(value=>{
        //得到模型对象，匹配后台表，如有差异更改后台表
        return SaveTable(model)
        .then(v=>{
                var pathname=path.join(__dirname,'../../../',model.Name);
                if(!fs.existsSync(pathname)){
                    fs.mkdirSync(pathname);
                }
                var filename=path.join(pathname,'index.js');
                if(fs.existsSync(filename))
                    fs.unlinkSync(filename);
                
                var code="var Model=require('../../model/from-json');";
                code+='\nmodule.exports=function(){';
                code+='\n   var data='+JSON.stringify(model)+';'
                code+="\n   var model=Model(data);"
                code+="\n   return model;"
                code+='\n}';
                var success=fs.writeFileSync(filename,code);

                return Promise.resolve(success);
        });
    });
    
}

module.exports=Apply;