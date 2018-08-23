/**
 * 模型字段定义
 */
function Field(){
    this.fieldname='';  //字段名称
    this.field_expr=''; //字段表达式
    this.field_caption='';  //字段标题
    this.control_type='';   //控件类型
    this.show=true;     //是否显示

    this.setValue=function(propertyName,value){
        this[propertyName]=value;
        return this;
    }
}

module.exports=Field;