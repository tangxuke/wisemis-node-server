var Form=require('../../model')
var Field=require('../../model/field')
var Relation=require('../../model/relation')

var form=new Form();
form.TableName='model'
form.ColumnCount=2
form.KeyField='name'
form.Database='wisemis'
form.setName('model').setTitle('模型')
form.Fields.push(
    new Field()
    .setName('name')
    .setTitle('模型名称')
    .setPropertyValue('IsKey',true)
);
form.Fields.push(
    new Field()
    .setName('title')
    .setTitle('标题')
)
form.Fields.push(
    new Field()
    .setName('tablename')
    .setTitle('业务表')
)
form.SetField(
    new Field()
    .setName('database')
    .setTitle('数据库')
    .setValue('demo')
    .setControlType('Select')
    .setOption('系统库','wisemis')
    .setOption('演示库','demo')
)
form.Fields.push(
    new Field()
    .setName('column_count')
    .setTitle('列数')
    .setValue(2)
)
form.Fields.push(
    new Field()
    .setName('remark')
    .setTitle('说明')
    .setWidth(200)
)
form.setRelation(
    new Relation()
    .setChildModel('model-fields')
    .setMainFields('name')
    .setChildFields('model_name')
)
.setRelation(
    new Relation()
    .setChildModel('classroom')
    .setMainFields('name')
    .setChildFields('name')
)


module.exports=form;