var Field=require('..');

/**
 * 从数据行创建字段
 * @param {Field} field 字段对象
 * @param {{field_name:string,field_title:string,field_type:string,field_length:number,grid_column_width:number,form_col_span:number,control_type:string,icon:string,is_insert:boolean,is_update:boolean,is_key:boolean,show_in_form:boolean,show_in_grid:boolean,orderid:number,select_options:string,reg_expression:string,system:boolean,default_value:string}} row 行数据
 * @returns {Field}
 */
function SetField(field,row){
    field.setName(row.field_name)
    .setTitle(row.field_title)
    .setType(row.field_type)
    .setFieldLength(row.field_length)
    .setWidth(row.grid_column_width)
    .setColSpan(row.form_col_span)
    .setControlType(row.control_type)
    .setIcon(row.icon)
    .setIsInsert(row.is_insert)
    .setIsUpdate(row.is_update)
    .setShowInForm(row.show_in_form)
    .setShowInGrid(row.show_in_grid)
    .setSystem(row.system)
    .setIsKey(row.is_key)
    .setOrderId(row.orderid)
    .setRegExpression(row.reg_expression)
    .setDefaultValue(eval(row.default_value));    

    if(row.select_options){
        row.select_options.split(',').forEach(
            item=>{
                if(item.includes(':')){
                    var s=item.split(':');
                    field.setOption(s[0],s[1]);
                }else{
                    field.setOption(item,item);
                }            
            }
        );
    }
}

module.exports=SetField;