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

                var bitFields=[];
                if(Array.isArray(fields)){
                    bitFields=fields.filter(field=>{
                    return field.type===16;
                    });
                }
                
                var resultset=results;
                if(Array.isArray(results)){
                    resultset=results.map(row=>{
                        bitFields.forEach(f=>{
                            var fieldname=f.name;
                            var fieldvalue=row[fieldname];

                            if(Buffer.isBuffer(fieldvalue)){
                                if(fieldvalue.readInt8(0)===1)
                                    row[fieldname]=true;
                                else
                                    row[fieldname]=false;
                            }else{
                                row[fieldname]=false;
                            }
                        });

                        return row;
                    });
                };

                //console.log(resultset);

                resolve({
                    results:resultset,
                    fields
                });
            }
            connection.end();
        })
    });

    return p;
}