var Field=require('./field')
var Relation=require('./relation')
var Script=require('./script')
var SetModelFromRow=require('./from-row')

/**
 * 模型对象定义
 */
function Model(){
    /**
     * 模型名称
     */
    this.Name='';
    /**
     * 设置模型名称
     * @param {string} name 模型名称
     * @returns {Model}
     */
    this.setName=function(name){
        this.Name=name;
        return this;
    }
    /**
     * 模型标题
     */
    this.Title='';
    /**
     * 设置模型标题
     * @param {string} title 模型标题
     * @returns {Model}
     */
    this.setTitle=function(title){
        this.Title=title;
        return this;
    }
    /**
     * 默认数据库
     */
    this.Database='demo';
    /**
     * 设置数据库
     * @param {string} database 数据库
     * @returns {Model}
     */
    this.setDatabase=function(database){
        this.Database=database;
        return this;
    }
    /**
     * 后台表
     */
    this.TableName='';
    /**
     * 设置数据表
     * @param {string} table 数据表
     * @returns {Model}
     */
    this.setTableName=function(table){
        this.TableName=table;
        return this;
    }
    /**
     * 列数
     */
    this.ColumnCount=1; 
    /**
     * 设置表单列数
     * @param {number} count 列数
     * @returns {Model}
     */
    this.setColumnCount=function(count){
        this.ColumnCount=count;
        return this;
    }
    /**
     * 排序表达式
     */
    this.OrderBy=''; 
    /**
     * 设置排序表达式
     * @param {string} orderby 排序表达式
     * @returns {Model}
     */
    this.setOrderBy=function(orderby){
        this.OrderBy=orderby;
        return this;
    }

    /**是否系统内置模型 */
    this.System=false;
    /**
     * 设置是否系统内置模型
     * @param {boolean} system 是否系统内置
     * @returns {Model}
     */
    this.setSystem=(system)=>{
        this.System=system;
        return this;
    }
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
     * 表单级脚本
     */
    this.Scripts=[];
    /**
     * 设置表单脚本
     * @param {string} field 字段名称
     * @param {string} type 事件类型
     * @param {string} code 事件代码
     * @returns {Model}
     */
    this.setScript=function(field,type,code){
        var script=new Script(field,type,code);
        this.Scripts.push(script);
        return this;
    }

    /**
     * 获取事件脚本对象
     * @returns {Script[]}
     */
    this.getScripts=function(){
        return this.Scripts;
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

    /**
     * 关系对象数组
     */
    this.Relations=[];
    /**
     * 设置关系对象
     * @param {Relation} relation 
     * @returns {Model}
     */
    this.setRelation=function(relation){
        this.Relations.push(relation);
        return this;
    }

    /**
     * 返回关系对象数组
     * @returns {Relation[]}
     */
    this.getRelations=function(){
        return this.Relations;
    }

    /**
     * 从行数据设置模型对象
     * @param {{name:string,title:string,tablename:string,database:string,column_count:number,order_by:string}} row 
     * @returns {Model}
     */
    this.setModelFromRow=function(row){
        SetModelFromRow(this,row);
        return this;
    }
}

module.exports=Model;