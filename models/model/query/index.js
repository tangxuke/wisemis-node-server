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
}

module.exports=Query;