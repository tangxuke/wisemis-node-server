var Model=require('./../../')
var Field=require('./../../field')
var Tool=require('./../../tool')

/**
 * 模型对象的工具栏定义
 * 这个是默认工具栏，包含新建功能
 * @param {Model} model 模型对象
 * @param {Field[]} data 参数对象（实际上是模型字段数组）
 * @returns {Promise<Tool[]>}
 */
function toolbar(model,data){
    var tools=[];
    tools.push(
        new Tool()
        .setName('new')
        .setLabel('新建')
        .setType('success')
        .setAction('open',{
            path:'/models/new'
        })
    )
    tools.push(
        new Tool()
        .setName('edit')
        .setLabel('修改')
        .setType('default')
        .setEnable(false)
    )
    tools.push(
        new Tool()
        .setName('delete')
        .setLabel('删除')
        .setType('default')
        .setConfirm(true)
    )

    return Promise.resolve(tools);
}

module.exports=toolbar;