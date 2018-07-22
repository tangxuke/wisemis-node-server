/**
 * 检查权限中间件，所有请求先经过这里
 */
module.exports = function (req, res, next) {
    if (req.session.username)
        next()
    else {
        if (req.originalUrl == '/users/login' || req.originalUrl == '/users/logout')
            next()
        else {
            res.json({
                success:false,
                message:'请先登录系统！',
                want_login: true
            })
        }
    }
}