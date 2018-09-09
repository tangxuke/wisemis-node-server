var Model=require('../../')
var Field=require('../../field')
var Relation=require('../../relation')
/**
 * 
 * @param {Model} model 
 * @param {Field[]} data 
 * @returns {Promise<Relation>}
 */
module.exports=function(model,data){
    var relations=model.getRelations();
    return Promise.resolve(relations);
}