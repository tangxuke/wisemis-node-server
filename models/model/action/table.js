/**
 * 返回表格组件的模型
 * @param {Model} model 模型对象
 * @param {object} params 参数对象
 */
module.exports=function(model,params){
    return new Promise(function(resolve,reject){
        model.Fields=model.Fields.filter(item=>{
            return item.ShowInGrid;
        })
        resolve(model)
    })
}