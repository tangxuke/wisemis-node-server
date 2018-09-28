var Model=require('..')
var RowInfo={
    name:'',
    title:'',
    tablename:'',
    database:'',
    column_count:2,
    order_by:''
}

/**
 * 从数据表行创建Model
 * @param {RowInfo} row 行数据
 * @returns {Model}
 */
function GetModel(row){
    var model=new Model()
    .setName(row.name)
    .setTitle(row.title)
    .setTableName(row.tablename)
    .setDatabase(row.database)
    .setColumnCount(row.column_count)
    .setOrderBy(row.order_by);

    return model;
}

module.exports=GetModel;

