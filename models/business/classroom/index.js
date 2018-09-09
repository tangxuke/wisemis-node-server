var Model=require('../../model')
var Field=require('../../model/field')

var form=new Model()

form.ColumnCount=2
form.Database='demo'
form.TableName='classroom'
form.Name='classroom'
form.Title='教室'
form.Fields.push(
    new Field()
    .setPropertyValue('Name','name')
    .setPropertyValue('Title','教室名称')
    .setPropertyValue('IsKey',true)
)
form.Fields.push(
    new Field()
    .setPropertyValue('Name','rows')
    .setPropertyValue('Title','行数')
    .setPropertyValue('Value',1)
)
form.Fields.push(
    new Field()
    .setPropertyValue('Name','cols')
    .setPropertyValue('Title','列数')
    .setPropertyValue('Value',1)
)
form.Fields.push(
    new Field()
    .setPropertyValue('Name','capacity')
    .setPropertyValue('Title','容纳人数')
    .setPropertyValue('Value',1)
)


module.exports=form