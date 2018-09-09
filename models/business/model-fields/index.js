var Model=require('./../../model');
var Field=require('./../../model/field');

var model=new Model();

model.ColumnCount=3;
model.Database='wisemis';
model.TableName='model_fields';
model.setName('model-fields').setTitle('模型字段');
model.SetField(
    new Field()
    .setName('model_name')
    .setTitle('模型名称')
    .setIsKey(true)
)
.SetField(
    new Field()
    .setName('field_name')
    .setTitle('字段名称')
    .setIsKey(true)
)
.SetField(
    new Field()
    .setName('field_title')
    .setTitle('字段标题')
)
.SetField(
    new Field()
    .setName('field_type')
    .setTitle('字段类型')
    .setControlType('Select')
    .setOption('文本','string')
    .setOption('数字','number')
    .setOption('日期','date')
    .setOption('时间','time')
    .setOption('逻辑','boolean')
    .setPropertyValue('DefaultValue','string')
)
.SetField(
    new Field()
    .setName('grid_column_width')
    .setTitle('网格列宽度')
    .setDefaultValue(80)
)
.SetField(
    new Field()
    .setName('form_col_span')
    .setTitle('表单跨列数')
    .setDefaultValue(1)
)
.SetField(
    new Field()
    .setName('control_type')
    .setTitle('控件类型')
    .setControlType('Select')
    .setOption('文本框','Input')
    .setOption('下拉框','Select')
    .setOption('复选框','Checkbox')
    .setOption('部门选择框','department-dialog')
    .setDefaultValue('Input')
)
.SetField(
    new Field()
    .setName('icon')
    .setTitle('图标')
)
.SetField(
    new Field()
    .setName('is_insert')
    .setTitle('是否支持插入')
    .setControlType('Checkbox')
    .setDefaultValue(true)
    .setType('boolean')
)
.SetField(
    new Field()
    .setName('is_update')
    .setTitle('是否支持修改')
    .setControlType('Checkbox')
    .setDefaultValue(true)
    .setType('boolean')
)
.SetField(
    new Field()
    .setName('is_key')
    .setTitle('是否主键')
    .setControlType('Checkbox')
    .setDefaultValue(false)
    .setType('boolean')
);


module.exports=model;