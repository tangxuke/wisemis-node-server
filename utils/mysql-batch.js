var mysql=require('mysql');
var Connection=require('./connection-batch')

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
    
    params = params || [];
    var p=new Promise(function(resolve,reject){
        var conn=new Connection(database);
        var connection=mysql.createConnection(conn);
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