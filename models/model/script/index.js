/**
 * 事件脚本对象
 * @param {string} field 字段名称,null表示表单对象
 * @param {string} type 事件类型
 * @param {string} params 参数列表
 * @param {string} code 时间代码
 */
function Script(field,type,params,code){
    /**
     * 字段名称,null表示表单对象
     */
    this.field=field;
    /**
     * 触发类型
     */
    this.type=type;
    /**
     * 参数列表
     */
    this.params=params || '';
    /**
     * 执行代码
     */
    this.code=code || '';

    /**
     * @returns {string}
     */
    this.toString=function(){
        var fn=new Function(this.params,this.code);
        return fn.toString();
    }
}

module.exports=Script;