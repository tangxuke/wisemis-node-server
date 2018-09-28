var RowInfo={
    /**字段名称*/
    field_name:'',
    /**事件类型*/
    type:'',
    /**参数列表*/
    params:'',
    /**事件代码*/
    code:''
}
var Script=require('..')

/**
 * 从数据行创建事件脚本对象
 * @param {RowInfo} row 
 * @returns {Script}
 */
function GetScript(row){
    var script=new Script(row.field_name,row.type,row.params,row.code);
    return script;
}

module.exports=GetScript;