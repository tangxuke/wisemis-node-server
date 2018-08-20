module.exports=function(menuArray){
    
    if(!Array.isArray(menuArray))
        return [];
    
    //全部元素加children属性
    var root=menuArray.map(item=>{
        //统一加children属性
        item.children=[];

        return item;
    }).map((item,index,arr)=>{
        
        //子菜单自动加入到上层菜单children数组中
        if(item['parentid']>0){
            var parent=arr.find(e=>{
                return e.id==item['parentid'];
            });

            if(parent!==undefined)
                parent['children'].push(item);
        }
        return item;
    }).map(item=>{
        //没有子菜单删除children属性
        if(item.children.length==0)
            delete item.children;

        //删除orderid属性
        if(typeof item.orderid!==undefined)
            delete item.orderid;

        return item;
    })
    .filter(item=>{
        //只返回第一层
        return item['parentid']==0
    });

    return root;
}