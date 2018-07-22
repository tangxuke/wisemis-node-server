var mongoose=require('mongoose')
var TheModel=require('./model')


module.exports=function(modelName){
        var p=new Promise((resolve,reject)=>{

            if(mongoose.modelNames().findIndex((item)=>{
                return item==modelName
            })>-1)
            {
                resolve(mongoose.model(modelName))
                return;
            }

            //读取模板
            TheModel.findOne({'name':modelName})
            .then((doc)=>{
                if(doc){
                    //生成架构
                    var schama=new Object()
                    doc.schama.forEach(item=>{
                        schama[item.name]=item.type
                    })
                    var theSchama=mongoose.Schema(schama)

                    resolve(mongoose.model(doc.name,theSchama,doc.collname));
                }else{
                    reject(new Error('模板不存在'))
                }
            }).catch((err)=>{
                reject(new Error('0'+err.message))
            });
        })

        return p;
}