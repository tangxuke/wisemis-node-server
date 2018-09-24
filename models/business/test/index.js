var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"test","Title":"test","Database":"demo","TableName":"test","ColumnCount":3,"Fields":[{"Name":"f4","Title":"字段4","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":true,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false}],"Relations":[],"Remark":""};
   var model=Model(data);
   return model;
}