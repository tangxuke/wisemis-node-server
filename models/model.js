var mysql=require('../utils/mysql');

/**
 * 模型对象定义
 */
function Model(){
    /**
     * 后台表
     */
    this.TableName='';
    /**
     * 列数
     */
    this.ColumnCount=1;
    /**
     * 字段列表
     */
    this.Fields=[];
    /**
     * 主键字段
     */
    this.KeyField='id';
    
    /**
     * 设置属性值并返回当前对象
     * @param {string} proprety 属性名
     * @param {any} value 属性值
     * @returns {Model}
     */
    this.SetValue=function(proprety,value){
        this[proprety]=value;
        return this;
    }

    this.Save=function(data){
        console.log(data);
        var insertFields=[],insertValues=[];
        this.Fields.forEach(item=>{
            insertFields.push(item.Name);
            insertValues.push(data[item.Name]);
        });
        var sql='insert into `'+this.TableName+'`('+insertFields.join(',')+') values ('+insertFields.map(item=>{return '?'}).join(',')+');';
        return mysql(sql,insertValues,'demo');
    }
}

module.exports=Model;