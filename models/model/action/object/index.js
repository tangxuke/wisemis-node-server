var Model=require('../../')
var Field=require('../../field')

/**
 * 返回模型对象本身
 * @param {Model} model 
 * @param {Field[]} data 
 * @returns {Promise<Model>}
 */
module.exports=function(model,data){
    return Promise.resolve(model);
}