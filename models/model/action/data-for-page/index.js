var mysql=require('../../../../utils/mysql')
var Model=require('../..')
/**
 * 返回分页数据
 * @param {Model} model 模型对象
 * @param {object} data 参数对象
 */
module.exports=async function(model,data){
        var pageSize = data['page-size'] || 10; //默认一页10条记录
        var currentPage = data['current-page'] || 1;    //当前页，默认1
        var totalPromise=await mysql('select count(*) as total from '+model.TableName,[],model.Database);
        
}