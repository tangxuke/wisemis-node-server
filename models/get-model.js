var mongoose=require('mongoose')
var TheModel=require('./model')

module.exports=function(modelName){
    var p=new Promise((resolve, reject)=>{
        var theSchama=new mongoose.Schema();
        //读取模板
        TheModel.findOne({'name':modelName})
        .then((doc)=>{
            if(doc){
                //生成架构
                theSchama.add(doc.schama);
                resolve(mongoose.model(doc.name,theSchama,doc.collname));
            }else{
                reject(new Error('模板不存在！'));
            }
        }).catch((err)=>{
            reject(err);
        });
    });
    
    return p;
}