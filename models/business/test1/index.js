var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"test1","Title":"测试1","Database":"wisemis","TableName":"test1","ColumnCount":3,"Fields":[{"Name":"f1","Title":"字段1","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null},{"Name":"f2","Title":"字段2","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null},{"Name":"f3","Title":"字段3","Type":"number","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null},{"Name":"f4","Title":"字段4","Type":"date","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null}],"Relations":[],"Remark":"test"};
   var model=Model(data);
   return model;
}