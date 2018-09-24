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
        .setPlaceHolder('字段名称或字段标题')
        .setSearchExpr("`field_name` like ? or `field_title` like ?")
    )
    .AddField(
        new Field()
        .setName('type')
        .setTitle('字段类型')
        .setControlType('Select')
        .setOption('文本','string')
        .setOption('数字','number')
        .setOption('日期','date')
        .setOption('时间','time')
        .setOption('逻辑','boolean')
        .setOption('<不限>','<不限>')
        .setDefaultValue('<不限>')
        .setSearchExpr('`field_type`=?')
        .setPlaceHolder('选择字段类型')
    )

    return query;
}

module.exports=GetQuery;