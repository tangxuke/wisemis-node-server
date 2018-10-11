var mysql=require('./../../utils/mysql')
var response=require('./../../utils/response')
var menuToTree=require('../../utils/array-to-tree')

var sys_menu=[];

function menu_list(req,res){

    mysql('select * from menu where ifnull(disable,0)=0 order by parentid desc,orderid',[])
    .then(value=>{
        
        var results=value.results;

        sys_menu=menuToTree(results);
        res.json(response.success(sys_menu))
    })
    .catch(err=>{
        res.json(response.error(err.message))
    })
}

module.exports=menu_list;