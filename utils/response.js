function response(){

    this.success=function(result){
        return {
            success:true,
            message:'',
            result:result
        }
    }

    this.error=function(message){
        return {
            success:false,
            message:message,
            result:null
        }
    }
}

module.exports=new response();