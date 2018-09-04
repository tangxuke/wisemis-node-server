var Model=require('../../index')
var Field=require('../../field/index')
var mysql=require('../../../../utils/mysql')

/**
 * 检查记录是否存在
 * @param {Model} model 
 * @param {Field[]} data 
 * @returns {Promise<Boolean>}
 */
module.exports=function(model,data){
    console.log('check-key');

    var p=new Promise(function(resolve,reject){

        var keys=data.filter(item=>{return item.IsKey});

        if(keys.length==0)
            resolve(false);
        else{
            var keysExpr=keys.map(item=>{
                return '`'+item.Name+'`=?';
            }).join(' and ');
            var keysValue=keys.map(item=>{return item.OldValue});
            var sql='select 1 from `'+model.TableName+'` where '+keysExpr;
            mysql(sql,keysValue,model.Database)
            .then(value=>{
                if(value.results.length>0)
                    resolve(true);
                else
                    resolve(false);
            })
            .catch(reason=>{
                reject(reason);
            });
        }
    });
    return p;
}