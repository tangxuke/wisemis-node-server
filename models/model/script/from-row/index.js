var Script=require('..')

/**
 * 从数据行创建事件脚本对象
 * @param {Script} script 脚本对象
 * @param {{field_name:string,type:string,params:string,code:string}} row 
 * @returns {Script}
 */
function SetScript(script,row){
    script.setField(row.field_name)
    .setType(row.type)
    .setParams(row.params)
    .setCode(row.code);

}

module.exports=SetScript;