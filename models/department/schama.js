/**
 * 部门架构对象
 */
function Schama(){
    return {
        table:'department',
        fields:[
            {
                name:'id',
                title:'Id',
                type:'string'
            }
        ]
    }
}

module.exports=Schama;