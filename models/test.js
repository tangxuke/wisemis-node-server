//连接MongoDB数据库
var mongoose = require('mongoose');
var getModel=require('./get-model');

mongoose.connect('mongodb://localhost/demo');
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
  var model=getModel('Test');
  model.then((value)=>{
      value.create({name:'tangxuke',age:30}).then((v)=>{
          console.log('created');
      }).catch((e)=>{
          console.log('error');
      }).then(()=>{
          mongoose.disconnect();
      })
  }).catch((err)=>{
      console.log(err);
  })
});
mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});