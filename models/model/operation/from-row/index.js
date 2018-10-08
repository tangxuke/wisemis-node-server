var Operation=require('..');

/**
 * 从数据行创建操作对象
 * @param {Operation} operation 动作对象
 * @param {{action:string,check_enable_code:string,check_visible_code:string,check_title_code:string,action_code:string,remark:string}} row 
 */
function GetOperation(operation,row){
    operation.setAction(row.action)
    .setCheckEnableCode(row.check_enable_code)
    .setCheckVisibleCode(row.check_visible_code)
    .setCheckTitleCode(row.check_title_code)
    .setRemark(row.remark)
    .setActionCode(row.action_code);
}

module.exports=GetOperation;