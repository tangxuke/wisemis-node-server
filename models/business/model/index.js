function GetModel(){
    var Form=require('../../model')
    var Field=require('../../model/field')
    var Relation=require('../../model/relation')
    
    var form=new Form();
    form.TableName='model'
    form.ColumnCount=2
    form.KeyField='name'
    form.Database='wisemis'
    form.setName('model').setTitle('模型')
    console.log(form.Fields)
    form.Fields.push(
        new Field()
        .setName('name')
        .setTitle('模型名称')
        .setPropertyValue('IsKey',true)
    );
    form.Fields.push(
        new Field()
        .setName('title')
        .setTitle('标题')
    )
    form.Fields.push(
        new Field()
        .setName('tablename')
        .setTitle('业务表')
        .setShowInGrid(false)
    )
    form.SetField(
        new Field()
        .setName('database')
        .setTitle('数据库')
        .setValue('demo')
        .setControlType('Select')
        .setOption('系统库','wisemis')
        .setOption('演示库','demo')
        .setShowInGrid(false)
    )
    form.Fields.push(
        new Field()
        .setName('column_count')
        .setTitle('列数')
        .setValue(2)
        .setShowInGrid(false)
    )
    form.Fields.push(
        new Field()
        .setName('remark')
        .setTitle('说明')
        .setWidth(200)
        .setShowInGrid(false)
    )
    form.setRelation(
        new Relation()
        .setChildModel('model-fields')
        .setMainFields('name')
        .setChildFields('model_name')
    );

    return form;
}







module.exports=GetModel;