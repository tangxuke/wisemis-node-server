var Model = require('../..')
var insertFn=require('./insert');
var keyFn=require('./check-keys');
var updateFn=require('./update')

/**
 * 保存数据（目前暂时只支持新建）
 * @param {Model} model 
 * @param {Model} data 
 * @returns {Promise}
 */
module.exports=function(model,data){

    var fields=model.getFields().map(item=>{
        item.Value=data[item.Name];
        item.OldValue=data[item.Name+'_OldValue'];

        return item;
    })

    var p=new Promise(function(resolve,reject){
        //检查记录是否存在
        keyFn(model,fields).then(value=>{
            if(value){
                //记录已存在，调用修改功能
                updateFn(model,fields)
                .then(value=>{
                    resolve(value);
                }).catch(err=>{
                    reject(err);
                });
            }else{
                insertFn(model,fields)
                .then(value=>{
                    resolve(value);
                })
                .catch(err=>{
                    reject(err);
                });
            }
        }).catch(reason=>{
            reject(reason);
        })
    });
    return p;
}

