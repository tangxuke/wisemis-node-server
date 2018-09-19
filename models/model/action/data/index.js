var Model=require('../..')
var mysql=require('../../../../utils/mysql')
var page={
    current:1,  //当前页
    pagesize:10 //每页条数
}
/**
 * 获取实体数据
 * @param {Model} model 模型对象
 * @param {page} data 参数对象
 * @returns {Promise}
 */
module.exports=function(model,data){
    console.log(data);
    
    return new Promise(function(resolve,reject){
        var sql='select * from '+model.TableName;
        var values=[];
        if(data.where){
            /**
             * where 格式
             * data:{
             * ...,
             * where:[{key:fieldName1,value:fieldValue1},{key:fieldName2,value:fieldValue2},...]
             * }
             */
            var where=data.where.map(item=>{
                values.push(item.value);
                return '`'+item.key+'`=?';
            }).join(' and ');
            sql+=' where '+where;
        }
        if(data.current && data.pagesize)
            sql+=` limit ${(data.current-1)*data.pagesize},${data.pagesize}`;

        mysql(sql,values,model.Database).then(value=>{
            var recordset=value.results
            model.getFields().forEach(item=>{
                if(item.Type==='boolean'){
                    recordset=recordset.map(e=>{

                        e[item.Name]=Buffer.from(e[item.Name]).readInt8(0)===1?true:false;

                        return e;
                    });
                }
            });
            //resolve(value.results);
            resolve(recordset);
        }).catch(reason=>{
            reject(reason);
        })
    })
    
}