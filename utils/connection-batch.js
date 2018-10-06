//MySQL连接选项对象
var Connection={
    host:'gz-cdb-0jo34sqt.sql.tencentcdb.com',
    port:62178,
    user:'root',
    password:'hlh***TXK0921',
    database:'wisemis',
    multipleStatements:true,
    connectTimeout:1*60*1000    //连接超时3分钟
}

module.exports=Connection;