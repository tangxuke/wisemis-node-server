var Model=require('..')

/**
 * 从数据表行创建Model
 * @param {Model} model
 * @param {{name:string,title:string,tablename:string,column_count:number,order_by:string,system:boolean,auto_focus_field:string,auto_refresh:boolean,pages:string}} row 行数据
 */
function GetModel(model,row){
    model
    .setName(row.name)
    .setTitle(row.title)
    .setTableName(row.tablename)
    .setColumnCount(row.column_count)
    .setOrderBy(row.order_by)
    .setAutoFocusField(row.auto_focus_field)
    .setAutoRefresh(row.auto_refresh)
    .setPages(row.pages)
    .setSystem(row.system);
}

module.exports=GetModel;

