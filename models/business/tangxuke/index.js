var Model = require('../../model/from-json');
module.exports = function () {
    var data = { "Name": "tangxuke", 
    "Title": "唐旭克", 
    "Database": "demo", 
    "TableName": "tangxuke", 
    "ColumnCount": 3, 
    "Fields": [
        { 
            "Name": "age", 
            "Title": "年龄", 
            "Type": "string", 
            "Width": 80, 
            "ColSpan": 1, 
            "ControlType": "Input", 
            "Options": [], 
            "Value": "", "Icon": "", 
            "IsInsert": { "type": "Buffer", "data": [1] }, 
            "IsUpdate": { "type": "Buffer", "data": [1] }, 
            "IsKey": { "type": "Buffer", "data": [0] }, 
            "ShowInGrid": true, 
            "ShowInForm": true, 
            "DefaultValue": "", 
            "OldValue": null 
        }, 
        { 
            "Name": "name", 
            "Title": "姓名", 
            "Type": "string", 
            "Width": 80, 
            "ColSpan": 1, 
            "ControlType": "Input", 
            "Options": [], 
            "Value": "", 
            "Icon": "", 
            "IsInsert": { "type": "Buffer", "data": [1] }, 
            "IsUpdate": { "type": "Buffer", "data": [1] }, 
            "IsKey": { "type": "Buffer", "data": [1] }, 
            "ShowInGrid": true, 
            "ShowInForm": true, 
            "DefaultValue": "", 
            "OldValue": null 
        }, 
        { 
            "Name": "school", 
            "Title": "学校", 
            "Type": "string", 
            "Width": 80, 
            "ColSpan": 1, 
            "ControlType": "Input", 
            "Options": [], "Value": "", 
            "Icon": "", "IsInsert": { "type": "Buffer", "data": [1] }, 
            "IsUpdate": { "type": "Buffer", "data": [1] }, 
            "IsKey": { "type": "Buffer", "data": [0] }, 
            "ShowInGrid": true, 
            "ShowInForm": true, 
            "DefaultValue": "", 
            "OldValue": null 
        }, 
        { "Name": "title", "Title": "标题", "Type": "string", "Width": 80, "ColSpan": 1, "ControlType": "Input", "Options": [], "Value": "", "Icon": "", "IsInsert": { "type": "Buffer", "data": [1] }, "IsUpdate": { "type": "Buffer", "data": [1] }, "IsKey": { "type": "Buffer", "data": [0] }, "ShowInGrid": true, "ShowInForm": true, "DefaultValue": "", "OldValue": null }], "Relations": [], "Remark": "test" };
    var model = Model(data);
    return model;
}