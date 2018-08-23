var a=require('./controller')
/**
 * 表格对象
 */
function Table(){
    a.publish()
    a.subscribe()
}
/**
 * 返回字段列表
 */
function columns(){
    return []
}

/**
 * 返回数据
 */
function data(){
    return []
}

/**
 * 返回操作列表
 */
function actions(){
    return {
        header:[],   //出现在表格头部的操作列表
        row:[], //出现在数据行上的操作列表
        footer:[]   //出现在表格尾部的操作列表
    }
}

module.exports=columns;
module.exports=data;
module.exports=actions;