var mysql=require('./../../utils/mysql')
var response=require('./../../utils/response')
var menuToTree=require('../../utils/menu-to-tree')

var sys_menu=[],custom_menu=[];

function menu_list(req,res){

    //测试方便
    req.session.database='demo';

    mysql('select * from menu where ifnull(disable,0)=0 order by parentid desc,orderid','wisemis')
    .then(value=>{
        
        var results=value.results;
        sys_menu=menuToTree(results);

        mysql('select * from custom_menu where ifnull(disable,0)=0 order by parentid desc,orderid',req.session.database)
        .then(v=>{
            custom_menu=menuToTree(v.results);
            res.json(response.success([...sys_menu,...custom_menu]))
        }).catch(err=>{
            res.json(response.error(err.message))
        })
    })
    .catch(err=>{
        res.json(response.error(err.message))
    })
}

module.exports=menu_list;