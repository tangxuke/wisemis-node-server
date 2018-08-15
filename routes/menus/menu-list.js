var mysql=require('./../../utils/mysql')
var response=require('./../../utils/response')



function menu_list(req,res){
    mysql('select * from sys_menu order by parentid desc,orderid')
    .then(value=>{
        
        var results=value.results;

        //全部元素加children属性
        var root=results.map(item=>{
            if(item.children==undefined)
                item.children=[];
            return item;
        }).map((item,index,arr)=>{
            if(item['parentid']>0){
                var parent=arr.find(e=>{
                    return e.id==item['parentid'];
                });
                parent.children.push(item);
            }
            return item;
        }).map(item=>{
            if(item.children.length==0)
                delete item.children;
            return item;
        })
        .filter(item=>{
            return item['parentid']==0
        });

        res.json(response.success(root))
    })
    .catch(err=>{
        res.json(response.error(err.message))
    })
}

module.exports=menu_list;