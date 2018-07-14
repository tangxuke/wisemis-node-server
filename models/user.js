var mongoose=require('mongoose')

var UserSchama=mongoose.Schema({
    'username':String,
    'password':String,
    'displayname':String,
    'imageurl':String,
    'message':Array
})

module.exports=mongoose.model('User',UserSchama,'users')