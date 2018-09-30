var Model=require('./../..')
var ModelFromDb=require('../../from-db')
var fs=require('fs')
var path=require('path')

/**
 * 保存模型为静态文件
 * @param {Model} model 
 * @returns {Promise<boolean>}
 */
function SaveModelToFile(model){
    return ModelFromDb(model.Name)
    .then(theModel=>{
        var businessPath=path.join(__dirname,'../../../business');
        var modelPath=path.join(businessPath,theModel.Name);
        if(!fs.existsSync(modelPath)){
            fs.mkdirSync(modelPath);
        }
        
        var modelFilePath=path.join(modelPath,'index.js');
        if(fs.existsSync(modelFilePath))
            fs.unlinkSync(modelFilePath);
        var modelCode='function GetModel(){';
        modelCode+='\n  return '+JSON.stringify(theModel)+';';
        modelCode+='\n}';
        modelCode+='\nmodule.exports=GetModel;'
        fs.writeFileSync(modelFilePath,modelCode);
        return Promise.resolve(true);
    });
}

module.exports=SaveModelToFile;