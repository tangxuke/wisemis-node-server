/**
 * 模型对象
 */
function AppObject(){
    /**
     * 应用名称
     */
    this.AppName='';    //应用名称
    /**
     * 应用标题
     */
    this.Caption='';    //应用标题
    /**
     * 业务表
     */
    this.BusinessTable='';      //业务表
    /**
     * 字段列表
     */
    this.Fields=[];     //字段列表
}

module.exports=AppObject;