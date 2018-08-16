var mysql=require('mysql');

module.exports=function(sql){
    var p=new Promise(function(resolve,reject){

        var connection=mysql.createConnection(session.connection);

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