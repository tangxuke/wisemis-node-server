var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"setting-type","Title":"设置类型","Database":"demo","TableName":"setting_type","ColumnCount":1,"OrderBy":"","Fields":[{"Name":"name","Title":"类型名称","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":true,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false,"OrderId":0}],"Relations":[],"Remark":""};
   var model=Model(data);
   return model;
}