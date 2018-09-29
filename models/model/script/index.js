var SetScriptFromRow=require('./from-row');

/**
 * 脚本对象
 */
function Script(){
    /**
     * 字段名称,null表示表单对象
     */
    this.field='';
    /**
     * 设置字段名称
     * @param {string} field 字段名称
     * @returns {Script}
     */
    this.setField=function(field){
        this.field=field;
        return this;
    }
    /**
     * 触发类型
     */
    this.type='';
    /**
     * 设置事件类型
     * @param {string} type 事件类型，如blur
     * @returns {Script}
     */
    this.setType=function(type){
        this.type=type;
        return this;
    }
    /**
     * 参数列表
     */
    this.params='';
    /**
     * 设置参数列表
     * @param {string} params 参数列表
     * @returns {Script}
     */
    this.setParams=function(params){
        this.params=params;
        return this;
    }
    /**
     * 执行代码
     */
    this.code='';
    /**
     * 设置事件代码
     * @param {string} code 事件代码
     * @returns {Script}
     */
    this.setCode=function(code){
        this.code=code;
        return this;
    }

    /**
     * @returns {string}
     */
    this.toString=function(){
        var fn=new Function(this.params,this.code);
        return fn.toString();
    }

    /**
     * 从行数据设置脚本对象
     * @param {any} row 行数据
     * @returns {Script}
     */
    this.setScriptFromRow=function(row){
        SetScriptFromRow(this,row);
        return this;
    }
}

module.exports=Script;