/**
 * 返回成功的json
 * @param {any} result 
 */
module.exports.success=function(result){
    return {
        success:true,
        message:'',
        result:result
    }
}

/**
 * 返回失败的json
 * @param {string} message 
 */
module.exports.error=function(message){
    return {
        success:false,
        message:message,
        result:null
    }
}