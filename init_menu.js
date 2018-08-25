var mysql=require('./utils/mysql_wisemis')
var fs=require('fs')

var p=new Promise(function(resolve,reject){
    mysql('select * from menu where ifnull(disable,0)=0 order by parentid desc,orderid',[],'wisemis')
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

        resolve(root)
    })
    .catch(err=>{
        reject(err)
    })
})
.then(value=>{
    //路由索引文件内容
    var routerText=``;
    //路由索引文件导出内容
    var exportText=``;

    value.forEach(element => {
        //添加路由文件
        routerText+=`
//${element.title}
import ${element.name} from './routes/${element.name}'
        `;
        exportText+=`...${element.name},`;
        //创建路由文件
        if(fs.existsSync('C:\\vue.js\\d2-admin\\src\\router\\routes\\'+element.name+'.js'))
            fs.unlinkSync('C:\\vue.js\\d2-admin\\src\\router\\routes\\'+element.name+'.js');
        //创建页面文件
        //创建根目录
        if(!fs.existsSync('C:\\vue.js\\d2-admin\\src\\pages\\'+element.name))
            fs.mkdirSync('C:\\vue.js\\d2-admin\\src\\pages\\'+element.name)

        var text=`
//${element.title} 路由定义
// layout
import layoutHeaderAside from '@/layout/header-aside'
        
const meta = { requiresAuth: true}
export default [
    {
        name:'${element.name}',
        path:'${element.path}',
        component:layoutHeaderAside,
        redirect: { name: '${element.children[0].name}' },
        children:[`;

        element.children.forEach(item=>{
            //创建页面文件
            var pagename=item.path.replace(element.path+'/','');
            if(!fs.existsSync(`C:\\vue.js\\d2-admin\\src\\pages\\${element.name}\\${pagename}`))
                fs.mkdirSync(`C:\\vue.js\\d2-admin\\src\\pages\\${element.name}\\${pagename}`);
            if(!fs.existsSync(`C:\\vue.js\\d2-admin\\src\\pages\\${element.name}\\${pagename}\\index.vue`)){
                var indexVueText=`
<template>
    <d2-container>${item.title}</d2-container>
</template>
                `;
                fs.writeFileSync(`C:\\vue.js\\d2-admin\\src\\pages\\${element.name}\\${pagename}\\index.vue`,indexVueText,'utf-8');
            };
            text+=`
            {
                path:'${pagename}',
                name:'${item.name}',
                component:()=>import('@/pages/${element.name}/${item.path.replace(element.path+'/','')}'),
                meta:{...meta,title:'${item.title}'}
            },
            `;
        });
        text+=` 
        ]
    }
] 
       `;
       
        fs.writeFileSync('C:\\vue.js\\d2-admin\\src\\router\\routes\\'+element.name+'.js',text,'utf-8')
       
    });
    routerText+=`
export default [${exportText.substr(0,exportText.length-1)}]
`;
 fs.writeFileSync('C:\\vue.js\\d2-admin\\src\\router\\my-router-index.js',routerText,'utf-8')
}).catch(err=>{

})