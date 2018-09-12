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
            console.log('1')
            resolve(require(pathname)(params));
        } 
        else{
            //找不到模型+操作，那看看有没有模型定义
            pathname=`${__dirname}\\business\\${modelName}`;
            if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js')){
                //采用默认action
                var model=require(pathname);
                pathname=`${__dirname}\\model\\action\\${action}`;

                if(fs.existsSync(pathname)||fs.existsSync(pathname+'.js')){
                    console.log('2')
                    resolve(require(pathname)(model,params));
                }
                else{
                    console.log('3')
                    reject(new Error(`找不到模型 ${modelName}\\${action}`));
                }
            }
            else{
                console.log('4')
                reject(new Error(`找不到模型 ${modelName}\\${action}`));
            }
        }
    });
}