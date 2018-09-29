var Model=require('../../model')
var Field=require('../../model/field')

/**
 * 获取模型
 * @returns {Model}
 */
function GetModel(){
    var model=new Model()
    .setName('model-scripts')
    .setTitle('模型事件对象')
    .setDatabase('wisemis')
    .setTableName('model_scripts')
    .setColumnCount(2)
    .SetField(
        new Field()
        .setName('model_name')
        .setTitle('模型名称')
        .setIsKey(true)
        .setOrderId(10)
    )
    .SetField(
        new Field()
        .setName('field_name')
        .setTitle('字段名称')
        .setIsKey(true)
        .setOrderId(20)
    )
    .SetField(
        new Field()
        .setName('type')
        .setTitle('事件类型')
        .setIsKey(true)
        .setOrderId(30)
    )
    .SetField(
        new Field()
        .setName('params')
        .setTitle('参数列表')
        .setOrderId(35)
    )
    .SetField(
        new Field()
        .setName('code')
        .setTitle('事件代码')
        .setColSpan(2)
        .setOrderId(40)
    );

    return model;
}

module.exports=GetModel;
