var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'gz-cdb-0jo34sqt.sql.tencentcdb.com',
    port:62178,
    user:'root',
    password:'hlh***TXK0921',
    database:'test'
});

connection.connect((err)=>{
    if(err)
        console.log(err.message);
    else
    {
        console.log('连接MySQL成功！');
        connection.query('select * from customer',function(error,results,fields){
            if(error)
                console.log(error.message);
            else{
                console.log(fields);
                console.log(results);
            }
            connection.end();
        })
        
    }
})