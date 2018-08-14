var mysql=require('mysql');



module.exports=function(sql){
    var p=new Promise(function(resolve,reject){

        var connection=mysql.createConnection({
            host:'gz-cdb-0jo34sqt.sql.tencentcdb.com',
            port:62178,
            user:'root',
            password:'hlh***TXK0921',
            database:'education'
        });

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