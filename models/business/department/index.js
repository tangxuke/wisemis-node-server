var Form=require('../../model')
var Field=require('../../model/field')

var form=new Form();
form.TableName='department'
form.ColumnCount=2
form.Fields.push(
    new Field()
    .setName('type')
    .setTitle('类型')
    .setControlType('Select')
    .setOption('部门','1')
    .setOption('校区','2')
    .setDefaultValue('1')
);
form.Fields.push(new Field()
    .setName('id')
    .setTitle('Id')
    .setPropertyValue('IsInsert',false)
    .setPropertyValue('IsUpdate',false)
    .setPropertyValue('IsKey',true)
    .setPropertyValue('ShowInForm',false)
)
form.Fields.push(new Field().setName('name').setTitle('名称'))
form.Fields.push(new Field().setName('parentid').setValue(0).setTitle('上级部门').setControlType('select-department-control'))
form.Fields.push(new Field().setName('tel').setTitle('联系电话'))
form.Fields.push(new Field().setName('leader').setIcon('user').setValue('唐旭克').setTitle('负责人'))
form.Fields.push(new Field().setName('address').setColSpan(3).setTitle('地址'))

module.exports=form;