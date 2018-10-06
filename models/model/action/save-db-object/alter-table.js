var Model=require('../..')
var mysql=require('../../../../utils/mysql')
var mysql_batch=require('../../../../utils/mysql-batch')

/**
 * 修改表结构
 * @param {Model} model 
 * @returns {Promise<boolean>}
 */
function AlterTable(model){
    return new Promise(function(resolve,reject){
        var sql='select * from `COLUMNS` where `TABLE_NAME`=? order by ORDINAL_POSITION';
        var alterSQL='';
        mysql(sql,[model.TableName],'information_schema')
        .then(value=>{
            //从模板定义角度比较
            model.getFields().forEach(item=>{
                var found=value.results.find(item1=>{
                    return item1.COLUMN_NAME.toLowerCase()===item.Name.toLowerCase();
                });
                if(!found){
                    //模板定义的字段不存在，添加字段
                    alterSQL+='\nalter table `'+model.TableName+'` add `'+item.Name+'` '+item.getSQLType()+' null COMMENT '+`'${item.Title}';`;
                }else{
                    //模板定义的字段已存在，比较字段类型
                }
            });
            //从实体表的角度比较，删除掉模板不存在的字段
            value.results.forEach(item=>{
                var found=model.getFields().find(item1=>{
                    return item1.Name.toLowerCase()===item.COLUMN_NAME.toLowerCase();
                });
                if(!found){
                    //模板定义中不存在此字段，删除之
                    alterSQL+='\nalter table `'+model.TableName+'` drop column `'+item.COLUMN_NAME+'`;';
                }
            });

            if(alterSQL.length){
                mysql_batch(alterSQL,[],model.Database)
                .then(value1=>{
                    resolve(true);
                })
                .catch(reason1=>{
                    reject(reason1);
                })
            }else{
                resolve(true);
            }
        })
        .catch(reason=>{
            reject(reason);
        })     
    });
}

module.exports=AlterTable;