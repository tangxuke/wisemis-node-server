var AppObject=require('./../app-object')
var FieldObject=require('./../app-field')

var app=new AppObject();
app.AppName='部门'
app.Caption='部门设置'
app.Table='department'
app.Fields.push(new FieldObject().setValue('fieldname','tangxuke')

module.exports=app;