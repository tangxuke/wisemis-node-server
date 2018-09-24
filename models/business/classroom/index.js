var Model=require('../../model/from-json');
module.exports=function(){
   var data={"Name":"classroom","Title":"教室","Database":"demo","TableName":"classroom","ColumnCount":2,
   "Fields":[
       {"Name":"Name","Title":"教室名称","Type":"string","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":true,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false},
       {"Name":"PersonCount","Title":"容纳人数","Type":"number","FieldLength":50,"Width":80,"ColSpan":1,"ControlType":"Input","Options":[],"Value":"","Icon":"","IsInsert":true,"IsUpdate":true,"IsKey":false,"ShowInGrid":true,"ShowInForm":true,"DefaultValue":"","OldValue":null,"SearchField":false}
    ],"Relations":[],"Remark":"教室对象"};
   var model=Model(data);
   return model;
}