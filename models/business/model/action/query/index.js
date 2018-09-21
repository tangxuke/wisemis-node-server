var Query=require('../../../../model/query');
var Field=require('../../../../model/query/field');

function GetQuery(){
    var query=new Query();
    query.setSearchExpr("database='demo'")
    .setColumnCount(1)
    .AddField(
        new Field()
        .setTitle('名称')
        .setPlaceHolder('模型名称或标题或表名')
        .setSearchExpr('name=? or title=? or tablename=?')
    )

    return Promise.resolve(query);
}

module.exports=GetQuery;