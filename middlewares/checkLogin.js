module.exports={
    checkLogin:(req,res,next)=>{
        if(!req.session.username){
            return res.json({
                success:false,
                message:'用户未登录',
                result:null,
                want_login:true
            })
        }
        next()
    },
    checkNotLogin:(req,res,next)=>{
        if(req.session.username){
            return res.json({
                success:false,
                message:'用户已登录',
                result:null,
                session:true
            })
        }
        next()
    }
}