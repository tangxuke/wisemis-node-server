var fs=require('fs');
/**
 * 获取模型的Promise
 * @param {string} modelName 
 * @param {string} action 
 * @param {JSON} params 
 */
module.exports=function(modelName,action,params){
    return new Promise(function(resolve,reject){
        //查找模型文件是否存在
        var pathname=`${__dirname}\\${modelName}\\${action}`;
        if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js'))
            resolve(require(pathname)(params));
        else
            reject(new Error(`找不到模型 ${modelName}\\${action}`));
    });
}