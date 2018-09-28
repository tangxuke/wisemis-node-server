var Script=require('./../')

/**
 * 从JSON创建Script对象
 * @param {object} data 
 * @returns {Script}
 */
function GetScriptFromJson(data){
    var script=new Script();
    Object.keys(data).forEach(key=>{
        script[key]=data[key];
    });

    return script;
}

module.exports=GetScriptFromJson;