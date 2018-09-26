var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"holidays","Title":"假日设置","Database":"demo","TableName":"holidays","ColumnCount":2,"OrderBy":"","Fields":[{"Name":"name","Title":"假日名称","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":true,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false,"OrderId":0},{"Name":"date","Title":"日期","Type":"date","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"DatePicker","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":false,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false,"OrderId":0},{"Name":"remark","Title":"备注","Type":"string","FieldLength":50,"Width":80,"ColSpan":2,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":false,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false,"OrderId":0}],"Relations":[],"Remark":""};
   var model=Model(data);
   return model;
}