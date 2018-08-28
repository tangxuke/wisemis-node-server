var Form=require('../../model')
var Field=require('../../model/field')

var form=new Form();
form.TableName='model'
form.ColumnCount=2
form.KeyField='name'
form.Database='wisemis'
form.Fields.push(
    new Field()
    .setName('name')
    .setTitle('模型名称')
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
)


module.exports=form;