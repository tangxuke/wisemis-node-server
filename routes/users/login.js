var sha1=require('sha1')
var mysql=require('./../../utils/mysql')
var response=require('../../utils/response')


function login(req,res){
    var username=req.body.username;
    var password=sha1(req.body.password);

    if(username.indexOf('@')===-1){
        res.json(response.error('用户名不合法!'))
        return;
    }

    var customer=username.split('@')[1];
    username=username.split('@')[0];

    //获取客户信息
    mysql(`select * from customer where name='${customer}'`,[],'wisemis')
    
    .then(value=>{
        if(value.results.length!==1){
            return new Promise(function(resolve,reject){
                reject(new Error('客户信息不存在！'));
            });
        }
        var row=value.results[0];
        req.session.database=row['database'];
        return mysql(`select * from user where username='${username}'`,[],req.session.database);
    })
    .then(value=>{
        if(value.results.length===1){
            if(password===value.results[0]['password']){
                res.json(response.success({
                    uuid:value.results[0]['guid'],
                    token:'i_dont_known',
                    name:value.results[0]['display_name']
                }));
            }else{
                res.json(response.error('密码错误！'))
            }
        }else{
            res.json(response.error('用户名不存在！'));
        }
    })
    .catch(err=>{
        res.json(response.error(err.message));
    })
}

module.exports=login;