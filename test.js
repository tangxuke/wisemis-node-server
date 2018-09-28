var mysql=require('./utils/mysql')
var Model=require('./models/model')
var FieldFromRow=require('./models/model/field/from-row');
var ScriptFromRow=require('./models/model/script/from-row')

var model=new Model();
var modelName='class-time'

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
        Promise.reject('我kao!');
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

Promise.all([p1,p2,p3])
.then(value=>{
    console.log(value);
})
.catch(reason=>{
    console.log(reason);
});