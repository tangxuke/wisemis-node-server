
module.exports=function(model,params){
    return new Promise(function(resolve,reject){
        model.Fields=model.Fields.filter(item=>{
            return item.IsInsert || item.IsUpdate;
        })
        resolve(model)
    })
}