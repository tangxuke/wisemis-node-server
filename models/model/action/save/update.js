var Model=require('../../index')
var Field=require('../../field/index')
var mysql=require('../../../../utils/mysql')

/**
 * 执行修改操作
 * @param {Model} model 模型对象
 * @param {Field[]} data 数据对象
 */
function updateFn(model,data){
    console.log('update');
    var updatedFields=data.filter(item=>{
        return item.IsUpdate && item.Value!==item.OldValue;
    });
    
    if(updatedFields.length==0)
        return Promise.reject(new Error('没有任何需要修改的字段！'));
    
    var values=[];
    var sql='update `'+model.TableName+'` set ';

    var setExpr=updatedFields.map(item=>{
        values.push(item.Value);
        return '`'+item.Name+'`=?';
    }).join(',');
    sql+=setExpr;

    var keyExpr=data.filter(item=>item.IsKey).map(item=>{
        values.push(item.OldValue);
        return '`'+item.Name+'`=?';
    }).join(' and ');
    sql+=' where '+keyExpr;
    console.log(sql);
    return mysql(sql,values,model.Database);
}

module.exports=updateFn;