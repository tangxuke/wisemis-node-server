var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"test","Title":"测试2","Database":"demo","TableName":"test","ColumnCount":4,"Fields":[{"Name":"f1","Title":"字段1","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null},{"Name":"f2","Title":"字段2","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[0]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null}],"Relations":[],"Remark":null};
   var model=Model(data);
   return model;
}