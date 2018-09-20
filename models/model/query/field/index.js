/**
 * 查询字段
 */
function Field(){
    /**
     * 字段标题
     */
    this.Title='';
    /**
     * 设置标题
     * @param {string} title 标题
     * @returns {Field}
     */
    this.setTitle=function(title){
        thit.Title=title;
        return this;
    }
    /**
     * 占位提示信息
     */
    this.PlaceHolder='';
    /**
     * 设置占位提示信息
     * @param {string} placeholder 占位提示信息
     * @returns {Field}
     */
    this.setPlaceHolder=function(placeholder){
        this.PlaceHolder=placeholder;
        return this;
    }
    /**
     * 查询表达式，用?表示输入值
     */
    this.SearchExpr='';
    /**
     * 设置查询表达式
     * @param {string} expr 查询表达式，用?表示值
     * @returns {Field}
     */
    this.setSearchExpr=function(expr){
        this.SearchExpr=expr;
        return this;
    }
    /**
     * 输入值
     */
    this.Value='';
    /**
     * 设置输入值
     * @param {string} value 输入的值
     * @returns {Field}
     */
    this.setValue=function(value){
        this.Value=value;
        return this;
    }
    /**
     * 备选值
     */
    this.Options=[];
    /**
     * 设置选项
     * @param {string} option 选项
     */
    this.setOption=function(option){
        this.Options.push(option);
        return this;
    }
}

module.exports=Field;