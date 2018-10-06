var mysql=require('mysql');
var ConnectionObject=require('./connection-batch')

var result={
    results:[],
    fields:[]
}
/**
 * 
 * @param {string} sql SQL语句
 * @param {any[]} params 参数化查询的参数数组
 * @param {string} database 数据库
 * @returns {Promise<result>}
 */
module.exports=function(sql,params,database){
    if(!database){
        //如果没有指定database，但是SQL代码中包含--{database:xxx}的，把xxx提取出来作为database
        var regExpr=new RegExp(/(?<=--\{database\:)\S+(?=\})/);
        var a=sql.match(regExpr);
        if(a.length>0){
            var item=a[0];
            database=item;
        }
    }
    params = params || [];
    ConnectionObject.database=database;
    var p=new Promise(function(resolve,reject){

        var connection=mysql.createConnection(ConnectionObject);
        connection.query(sql,params,function(error,results,fields){
            if(error)
                reject(error);
            else{
                resolve({
                    results,
                    fields
                });
            }
            connection.end();
        })
    });

    return p;
}