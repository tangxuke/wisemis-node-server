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
        var pathname=`${__dirname}\\business\\${modelName}\\action\\${action}`;
        
        if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js')){
            resolve(require(pathname)(params));
        } 
        else{
            //找不到模型+操作，那看看有没有模型定义
            pathname=`${__dirname}\\business\\${modelName}`;
            if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js')){
                //采用默认action
                var model=new require(pathname)();
                pathname=`${__dirname}\\model\\action\\${action}`;

                if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js')){
                    resolve(require(pathname)(model,params));
                }
                else{
                    reject(new Error(`找不到模型 ${modelName}\\${action}`));
                }
            }
            else{
                reject(new Error(`找不到模型 ${modelName}\\${action}`));
            }
        }
    });
}