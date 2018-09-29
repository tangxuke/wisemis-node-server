var Model=require('..')
var RowInfo={
    
}

/**
 * 从数据表行创建Model
 * @param {Model} model
 * @param {{name:string,title:string,tablename:string,database:string,column_count:number,order_by:string,system:boolean}} row 行数据
 */
function GetModel(model,row){
    model
    .setName(row.name)
    .setTitle(row.title)
    .setTableName(row.tablename)
    .setDatabase(row.database)
    .setColumnCount(row.column_count)
    .setOrderBy(row.order_by)
    .setSystem(row.system);
}

module.exports=GetModel;

