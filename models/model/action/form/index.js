/**
 * 返回表单组件模型
 * @param {Model} model 模型对象
 * @param {object} params 参数对象
 * @returns {Promise}
 */
module.exports=function(model,params){
    return new Promise(function(resolve,reject){
        model.Fields=model.Fields.filter(item=>{
            return item.ShowInForm;
        })
        resolve(model)
    })
}