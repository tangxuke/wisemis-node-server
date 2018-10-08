var SetOperationFromRow=require('./from-row');

/**
 * 动作对象
 */
function Operation(){
    /**动作名称 */
    this.Action='';
    /**
     * 设置动作名称
     * @param {string} action 动作名称
     * @returns {Operation}
     */
    this.setAction=function(action){
        this.Action=action;
        return this;
    }

    /**动作说明 */
    this.Remark='';
    /**
     * 设置动作说明
     * @param {string} remark 动作说明
     * @returns {Operation}
     */
    this.setRemark=function(remark){
        this.Remark=remark;
        return this;
    }

    /**检查可用条件的代码 */
    this.CheckEnableCode='';
    /**
     * 设置启用条件
     * @param {string} code 代码
     * @returns {Operation}
     */
    this.setCheckEnableCode=function(code){
        this.CheckEnableCode=code;
        return this;
    }

    /**检查可视条件的代码 */
    this.CheckVisibleCode='';
    /**
     * 设置检查可视条件的代码
     * @param {string} code 代码
     * @returns {Operation}
     */
    this.setCheckVisibleCode=function(code){
        this.CheckVisibleCode=code;
        return this;
    }

    /**检查标题改变的代码 */
    this.CheckTitleCode='';
    /**
     * 设置检查标题改变的代码
     * @param {string} code 代码
     * @returns {Operation}
     */
    this.setCheckTitleCode=function(code){
        this.CheckTitleCode=code;
        return this;
    }

    /**动作代码 */
    this.ActionCode='';
    /**
     * 设置动作代码
     * @param {string} code 动作代码
     */
    this.setActionCode=function(code){
        this.ActionCode=code;
        return this;
    }



    /**
     * 从数据行设置动作对象
     * @param {any} row 数据行
     * @returns {Operation}
     */
    this.setOperationFromRow=function(row){
        SetOperationFromRow(this,row);
        return this;
    }
}

module.exports=Operation;