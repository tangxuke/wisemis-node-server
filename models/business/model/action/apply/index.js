var mysql=require('../../../../../utils/mysql');
var Model=require('../../../../model');
var Field=require('../../../../model/field');
var fs=require('fs');
var path=require('path');
var SaveTable=require('./save-table')

/**
 * 应用模板
 * @param {Object} data
 */
function Apply(data){
    var modelName=data.modelName;
    var model=new Model();

    return new Promise(function(resolve,reject){
        mysql('select * from model where name=?',[modelName],'wisemis')
        .then(value=>{
            if(value.results.length !== 1)
            {
                reject(new Error('模板不存在'))
                return;
            }

            var result=value.results[0];
            model.setName(result.name)
            .setTitle(result.title)
            .SetPropertyValue('TableName',result.tablename)
            .SetPropertyValue('ColumnCount',result.column_count)
            .SetPropertyValue('Remark',result.remark)
            .SetPropertyValue('Database',result.database)

            mysql('select * from model_fields where model_name=?',[modelName],'wisemis')
            .then(value1=>{
                value1.results.forEach(item=>{
                    var field=new Field()
                    .setName(item.field_name)
                    .setTitle(item.field_title)
                    .setType(item.field_type)
                    .setWidth(item.grid_column_width)
                    .setColSpan(item.form_col_span)
                    .setControlType(item.control_type)
                    .setIcon(item.icon)
                    .setIsInsert(item.is_insert)
                    .setIsUpdate(item.is_update)
                    .setIsKey(item.is_key);

                    model.Fields.push(field);
                })

                //得到模型对象，匹配后台表，如有差异更改后台表
                SaveTable(model)
                .then(value=>{
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

                    resolve(success);
                })
                .catch(reason2=>{
                    reject(reason2);
                })
            })
            .catch(reason1=>{
                reject(reason1);
            })  
        })
        .catch(reason=>{
            reject(reason);
        })
    })

    
}

module.exports=Apply;