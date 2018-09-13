var Field=require('./../')

/**
 * 从JSON创建Field对象
 * @param {object} data 
 * @returns {Field}
 */
function GetFieldFromJson(data){
    var field=new Field();
    Object.keys(data).forEach(key=>{
        field[key]=data[key];
    });

    return field;
}

module.exports=GetFieldFromJson;