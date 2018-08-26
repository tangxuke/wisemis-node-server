var form=require('./schama');

module.exports=function(params){
    return new Promise(function(resolve,reject){
        form.Fields=form.Fields.filter(item=>{
            return item.IsInsert || item.IsUpdate;
        })
        resolve(form)
    })
}