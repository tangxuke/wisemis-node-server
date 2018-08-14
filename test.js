var mysql=require('./utils/mysql')

mysql('select * from sales_customer').then((res)=>{
    var count=res.results.length
    console.log(res.results[0]['display_name']);
}).catch((err)=>{
    console.log(err);
})