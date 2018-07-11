var mongoose=require('mongoose') 

var menuSchama=mongoose.Schema({
    'name':String,
    'icon':String,
    'title':String,
    'path':String,
    'children':Array
})

module.exports=mongoose.model('Menu',menuSchama,'menus')