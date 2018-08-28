var mysql=require('../../../utils/mysql')
var Model=require('../index')
/**
 * 返回分页数据
 * @param {Model} model 模型对象
 * @param {object} data 参数对象
 */
module.exports=function(model,data){
    return new Promise(function(resolve,reject){
        var pageSize = data['page-size'] || 10; //默认一页10条记录
        var currentPage = data['current-page'] || 1;    //当前页，默认1
        var total=GetTotel(model);
        console.log(total)
        resolve(1);
    })
}

/**
 * 获取记录总数（同步）
 * @param {Model} model 模型对象
 */
async function GetTotel(model){
    return await mysql('select count(*) as total from '+model.TableName,[],model.Database);
}