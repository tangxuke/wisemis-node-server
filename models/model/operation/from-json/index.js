var Operation=require('./../')

/**
 * 从JSON创建Field对象
 * @param {object} data 
 * @returns {Operation}
 */
function GetFieldFromJson(data){
    var field=new Operation();
    Object.keys(data).forEach(key=>{
        field[key]=data[key];
    });

    return field;
}

module.exports=GetFieldFromJson;