var mongoose=require('mongoose') 

var elementSchama=mongoose.Schema({
    'tag-name':String,              //标签名称
    'component':String,            //组件名称
    'props':Object,               //选项
    'attrs':Object,              //属性
    'solts':Array               //插槽列表           
})

var pageSchama=mongoose.Schema({
    'name':String,                      //页面名称
    'icon':String,                     //页面图标
    'title':String,                   //页面标题
    'path':String,                   //页面路径
    'elements':[elementSchama]      //元素列表        
})

module.exports=mongoose.model('Page',menuSchama,'pages')