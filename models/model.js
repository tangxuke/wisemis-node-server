var mongoose=require('mongoose');

var modelSchama=mongoose.Schema({
    'name':String,
    'schama':Object,
    'collname':String
})

module.exports=mongoose.model('Model',modelSchama,'models')