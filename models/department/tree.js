var ArrayToTree=require('../../utils/array-to-tree')
var TreeParam=require('../../utils/tree-params')
var mysql=require('./../../utils/mysql')
/**
 * 返回部门树结构
 */
module.exports=function(){
    var p=new Promise(function(resolve,reject){
        mysql('select * from department','demo')
        .then(value=>{
            TreeParam.titleColumn='name';
            var treeArray=value.results;
            var data=treeArray.map(item=>{
                switch (item.type) {
                    case '1': //部门
                        item.icon='md-contacts';
                        break;
                    case '2': //校区
                        item.icon='md-home'
                        break;
                    default:
                        break;
                }
                return item;
            });
            resolve(ArrayToTree(data,TreeParam));
        })
        .catch(message=>{
            reject(message);
        })
    });
    return p;
}