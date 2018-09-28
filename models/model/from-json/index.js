var Model=require('./../')
var Field=require('../field/from-json')
var Script=require('../script/from-json')
/**
 * 从JSON生成模型对象
 * @param {{Fields:[],Scripts:[]}} data 
 * @returns {Model}
 */
function GetModelFromJson(data){
    var model=new Model();
    model.ColumnCount=data['ColumnCount'];
    model.Database=data['Database'];
    model.Name=data['Name'];
    model.TableName=data['TableName'];
    model.Title=data['Title'];
    data.Fields.forEach(item=>{
        var field=Field(item);
        model.Fields.push(field);
    });
    data.Scripts.forEach(item=>{
        var script=Script(item);
        model.Scripts.push(script);
    })

    return model;
}

module.exports=GetModelFromJson;