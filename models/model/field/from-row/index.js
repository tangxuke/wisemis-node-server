var Field=require('..');
var RowInfo={
    field_name:'',
    field_title:'',
    field_type:'',
    field_length:0,
    grid_column_width:0,
    form_col_span:0,
    control_type:'',
    icon:'',
    is_insert:false,
    is_update:false,
    is_key:false,
    orderid:0,
    select_options:'',
    reg_expression:''
}

/**
 * 从数据行创建字段
 * @param {RowInfo} row 
 * @returns {Field}
 */
function GetField(row){
    var field=new Field()
    .setName(row.field_name)
    .setTitle(row.field_title)
    .setType(row.field_type)
    .setFieldLength(row.field_length)
    .setWidth(row.grid_column_width)
    .setColSpan(row.form_col_span)
    .setControlType(row.control_type)
    .setIcon(row.icon)
    .setIsInsert(row.is_insert)
    .setIsUpdate(row.is_update)
    .setIsKey(row.is_key)
    .setOrderId(row.orderid)
    .setRegExpression(row.reg_expression);

    if(row.select_options){
        row.select_options.split(',').forEach(
            item=>{
                var s=item.split(':');
                field.setOption(s[0],s[1]);
            }
        );
    }

    return field;
}

module.exports=GetField;