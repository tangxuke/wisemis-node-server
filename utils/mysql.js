var mysql=require('mysql');
var Connection=require('./connection')

var result={
    results:[],
    fields:[]
}
/**
 * 
 * @param {string} sql SQL语句
 * @param {any[]} params 参数化查询的参数数组 | 对象 | 值
 * @param {string} database 数据库，可选
 * @returns {Promise<result>}
 */
module.exports=function(sql,params,database){
    var p=new Promise(function(resolve,reject){
        var conn=new Connection(database);
        var connection=mysql.createConnection(conn);
        connection.query(sql,params,function(error,results,fields){
            if(error)
                reject(error);
            else{

                var bitFields=[];
                
                if(Array.isArray(fields)){
                    bitFields=fields.filter(field=>{
                        if(field === undefined)
                            return false;
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