var Field=require('./field')

/**
 * 模型对象定义
 */
function Model(){
    /**
     * 默认数据库
     */
    this.Database='demo';
    /**
     * 后台表
     */
    this.TableName='';
    /**
     * 列数
     */
    this.ColumnCount=1;
    /**
     * 主键字段,默认id
     */
    this.KeyField='id';    
    /**
     * 字段列表
     */
    this.Fields=[];

    /**
     * 获取字段列表
     * @returns {Field[]}
     */
    this.getFields=function(){
        return this.Fields;
    }

    /**
     * 设置属性值并返回当前对象
     * @param {string} proprety 属性名
     * @param {any} value 属性值
     * @returns {Model}
     */
    this.SetPropertyValue=function(proprety,value){
        this[proprety]=value;
        return this;
    }

    /**
     * 删除数据
     * @param {object} data 包含主键的JSON对象
     */
    this.Delete=function(data){
        return require('./action/delete')(this,data);
    }

    /**
     * 保存数据（暂时只做新增功能）
     * @param {object} data 数据JSON对象
     */
    this.Save=function(data){
        return require('./action/save')(this,data);
    }

    /**
     * 设置字段
     * @param {Field} field 添加的字段
     * @returns {Model}
     */
    this.SetField=function(field){
        this.Fields.push(field);
        return this;
    }
}

module.exports=Model;