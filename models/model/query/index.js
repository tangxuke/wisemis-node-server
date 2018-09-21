var Field=require('./field');

/**
 * 查询对象
 */
function Query(){
    /**
     * 查询方案名
     */
    this.Name='default';
    /**
     * 设置名称
     * @param {string} name 名称
     * @returns {Query}
     */
    this.setName=function(name){
        this.Name=name;
        return this;
    }

    /**
     * 列数
     */
    this.ColumnCount=3;
    /**
     * 设置查询表单列数
     * @param {number} count 查询表单列数
     * @returns {Query}
     */
    this.setColumnCount=function(count){
        this.ColumnCount=count;
        return this;
    }
    /**
     * 过滤条件
     */
    this.SearchExpr='';
    /**
     * 设置过滤条件
     * @param {string} expr 过滤条件
     * @returns {Query}
     */
    this.setSearchExpr=function(expr){
        this.SearchExpr=expr;
        return this;
    }
    /**
     * 查询字段列表
     */
    this.Fields=[];
    /**
     * 添加查询字段
     * @param {Field} field 查询字段
     * @returns {Query}
     */
    this.AddField=function(field){
        this.Fields.push(field);
        return this;
    }

    /**
     * 返回查询字段列表
     * @returns {Field[]}
     */
    this.getFields=function(){
        return this.Fields;
    }
}

module.exports=Query;