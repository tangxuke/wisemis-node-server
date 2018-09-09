var Model=require('..')
var Field=require('../field')

function Relation(){

    /**
     * 主模型对应字段
     */
    this.mainFields='';
    /**
     * 设置主模型对应字段
     * @param {string} fields 字段列表，多字段以逗号隔开
     * @returns {Relation}
     */
    this.setMainFields=function(fields){
        this.mainFields=fields;
        return this;
    };


    /**
     * 子关系模型对象
     */
    this.childModel='';
    /**
     * 设置子关系模型对象
     * @param {Model} model 模型对象
     * @return {Relation}
     */
    this.setChildModel=function(model){
        this.childModel=model;
        return this;
    };


    /**
     * 主模型对应字段
     */
    this.childFields='';
    /**
     * 设置子关系模型对应字段
     * @param {string} fields 字段列表，多字段以逗号隔开
     * @returns {Relation}
     */
    this.setChildFields=function(fields){
        this.childFields=fields;
        return this;
    };
}

module.exports=Relation;