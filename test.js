/**
 * auto delete sql server 2008 r2 Log folder
 */
var fs=require('fs');
var path=require('path');

var pathname='C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\Log';

setInterval(()=>{
    fs.readdir(pathname,function(err,files){
        files.forEach(file=>{
            var filename=path.join(pathname,file);
            fs.unlink(filename,err=>{
                if(!err){
                    console.log('remove file:'+filename);
                }
            });
        })
    }) 
},1000*60);


