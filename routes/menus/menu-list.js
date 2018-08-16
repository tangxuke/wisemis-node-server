var mysql=require('./../../utils/mysql_wisemis')
var response=require('./../../utils/response')



function menu_list(req,res){
    mysql('select * from sys_menu order by parentid desc,orderid')
    .then(value=>{
        
        var results=value.results;

        //全部元素加children属性
        var root=results.map(item=>{
            //统一加children属性
            if(item.children==undefined)
                item.children=[];

            return item;
        }).map((item,index,arr)=>{
            //子菜单自动加入到上层菜单children数组中
            if(item['parentid']>0){
                var parent=arr.find(e=>{
                    return e.id==item['parentid'];
                });
                parent.children.push(item);
            }
            return item;
        }).map(item=>{
            //没有子菜单删除children属性
            if(item.children.length==0)
                delete item.children;
            //删除orderid属性
            if(typeof item.orderid!==undefined)
                delete item.orderid

            return item;
        })
        .filter(item=>{
            //只返回第一层
            return item['parentid']==0
        });

        res.json(response.success(root))
    })
    .catch(err=>{
        res.json(response.error(err.message))
    })
}

module.exports=menu_list;