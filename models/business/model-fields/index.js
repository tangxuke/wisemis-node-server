function GetModel(){
    var Model=require('./../../model');
    var Field=require('./../../model/field');
    
    var model=new Model();
    
    model.ColumnCount=3;
    model.Database='wisemis';
    model.TableName='model_fields';
    model.setOrderBy('orderid,field_name')
    model.setName('model-fields').setTitle('模型字段');
    model.SetField(
        new Field()
        .setName('model_name')
        .setTitle('模型名称')
        .setIsKey(true)
    )
    .SetField(
        new Field()
        .setName('orderid')
        .setTitle('顺序号')
        .setDefaultValue(0)
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
        .setName('field_length')
        .setTitle('字段长度')
        .setDefaultValue(50)
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('grid_column_width')
        .setTitle('网格列宽')
        .setDefaultValue(80)
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('form_col_span')
        .setTitle('表单跨列')
        .setDefaultValue(1)
        .setShowInGrid(false)
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
        .setOption('日期选择框','DatePicker')
        .setDefaultValue('Input')
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('select_options')
        .setTitle('选择框数据源')
    )
    .SetField(
        new Field()
        .setName('reg_expression')
        .setTitle('正则表达式')
    )
    .SetField(
        new Field()
        .setName('icon')
        .setTitle('图标')
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('is_insert')
        .setTitle('支持插入')
        .setControlType('Checkbox')
        .setDefaultValue(true)
        .setType('boolean')
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('is_update')
        .setTitle('支持修改')
        .setControlType('Checkbox')
        .setDefaultValue(true)
        .setType('boolean')
        .setShowInGrid(false)
    )
    .SetField(
        new Field()
        .setName('is_key')
        .setTitle('是否主键')
        .setControlType('Checkbox')
        .setDefaultValue(false)
        .setType('boolean')
        .setShowInGrid(false)
    );

    return model;
}



module.exports=GetModel;