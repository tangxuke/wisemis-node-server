var Field=require('..');

/**
 * 从数据行创建字段
 * @param {Field} field 字段对象
 * @param {{field_name:string,field_title:string,field_type:string,field_length:number,grid_column_width:number,form_col_span:number,control_type:string,icon:string,is_insert:boolean,is_update:boolean,is_key:boolean,search_field:boolean,is_not_null:boolean,show_in_form:boolean,show_in_grid:boolean,orderid:number,reg_expression:string,system:boolean,default_value:string,tool_tip:string,page:string,data_source_type:string,data_source:string,data_source_sql_return_field:string,data_srouce_sql_database:string,control_height:number}} row 行数据
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
    .setSearchField(row.search_field)
    .setShowInForm(row.show_in_form)
    .setShowInGrid(row.show_in_grid)
    .setSystem(row.system)
    .setIsKey(row.is_key)
    .setIsNotNull(row.is_not_null)
    .setOrderId(row.orderid)
    .setRegExpression(row.reg_expression)
    .setToolTip(row.tool_tip)
    .setPage(row.page)
    .setDataSourceType(row.data_source_type)
    .setDataSource(row.data_source)
    .setDataSourceSQLReturnField(row.data_source_sql_return_field)
    .setDataSourceSQLDatabase(row.data_srouce_sql_database)
    .setControlHeight(row.control_height)
    .setDefaultValue(eval(row.default_value));    
}

module.exports=SetField;