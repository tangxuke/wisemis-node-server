var mysql=require('./utils/mysql')

mysql('select * from model',[],'wisemis')
.then(value=>{
    console.log(value.results);
})
.catch(reason=>{
    console.log(reason.message);
})