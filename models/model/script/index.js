/**
 * 事件脚本对象
 * @param {string} field 字段名称,null表示表单对象
 * @param {string} type 事件类型
 * @param {string} code 时间代码
 */
function script(field,type,code){
    /**
     * 字段名称,null表示表单对象
     */
    this.field=field;
    /**
     * 触发类型
     */
    this.type=type;
    /**
     * 执行代码
     */
    this.code=code;
}

module.exports=script;