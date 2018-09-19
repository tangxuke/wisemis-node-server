var mysql=require('mysql');
var ConnectionObject=require('./connection')

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