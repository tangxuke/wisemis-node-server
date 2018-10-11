var Model=require('./../')

/**
 * 从JSON创建Model对象
 * @param {object} data 
 * @returns {Model}
 */
function GetModelFromJson(data){
    var model=new Model();
    Object.keys(data).forEach(key=>{
        model[key]=data[key];
    });

    return model;
}

module.exports=GetModelFromJson;