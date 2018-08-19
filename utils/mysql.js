var mysql=require('mysql');
var ConnectionObject=require('./connection')

module.exports=function(sql,database){
    ConnectionObject.database=database;
    var p=new Promise(function(resolve,reject){

        var connection=mysql.createConnection(ConnectionObject);
        connection.query(sql,function(error,results,fields){
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