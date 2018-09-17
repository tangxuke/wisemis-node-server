var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"test","Title":"测试","Database":"demo","TableName":"test","ColumnCount":4,"Fields":[{"Name":"f1","Title":"ziduan","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Select","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[1]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null},{"Name":"fffff","Title":"fffff","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":{"type":"Buffer","data":[1]},"IsUpdate":{"type":"Buffer","data":[1]},"IsKey":{"type":"Buffer","data":[0]},"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null}],"Relations":[],"Remark":null};
   var model=Model(data);
   return model;
}