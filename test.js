var mysql=require('./utils/mysql')

mysql('select * from model where name=?',['model'],'wisemis')
.then(value=>{
    console.log(value.results[0].name)
})
.catch(reason=>{
    console.log(reason)
})