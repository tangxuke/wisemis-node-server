var TreeParam=require('./tree-params')
/**
 * 转换数组为树形结构要求的数组格式，要求parentColumn和keyColumn数据类型一致
 * @param {Array} data 源数组
 * @param {string} parentColumn 上层字段名称，默认'parentid'
 * @param {string} keyColumn 和上层字段相应的关键字典名称，默认'id'
 * @param {string} titleColumn 标题字段，默认'title'
 * @param {string} childrenElement children节点名称，默认'children'
 */
module.exports=function(data,params){
    params = params || TreeParam;

    childrenElement = params.childrenElement;
    parentColumn = params.parentColumn;
    keyColumn = params.keyColumn;
    titleColumn = params.titleColumn;

    if(!Array.isArray(data))
        return [];

    //全部元素加children属性
    var root=data.map(item=>{
        //统一加children属性
        item[childrenElement]=[];

        item['title']=item[titleColumn]
        
        return item;
    }).map((item,index,arr)=>{
        //子菜单自动加入到上层菜单children数组中
        if(item[parentColumn]){
            var parent=arr.find(e=>{
                return e[keyColumn]===item[parentColumn];
            });
            if(parent!==undefined)
                parent[childrenElement].push(item);
        }
        return item;
    }).map(item=>{
        //没有子菜单删除children属性
        if(item[childrenElement].length==0)
            delete item[childrenElement];

        return item;
    })
    .filter(item=>{
        return !item[parentColumn];
        //只返回第一层
    }).map(item=>{
        //自动展开
        item.expand=true;
        return item;
    });

    return root;
}