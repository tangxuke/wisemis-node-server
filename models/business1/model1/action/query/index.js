var Query=require('../../../../model/query');
var Field=require('../../../../model/query/field');

/**
 * 返回查询对象
 * @returns {Query}
 */
function GetQuery(){
    var query=new Query();
    query.setSearchExpr("database='demo'")
    .setColumnCount(2)
    .AddField(
        new Field()
        .setName('name')
        .setTitle('名称')
        .setPlaceHolder('模型名称或标题或表名')
        .setSearchExpr("`name` like ? or `title` like ? or `tablename` like ?")
    )
    .AddField(
        new Field()
        .setName('database')
        .setTitle('数据库')
        .setControlType('Select')
        .setOption('演示库','demo')
        .setOption('系统库','wisemis')
        .setOption('<不限>','<不限>')
        .setDefaultValue('<不限>')
        .setSearchExpr('`database`=?')
        .setPlaceHolder('选择数据库')
    )

    return query;
}

module.exports=GetQuery;