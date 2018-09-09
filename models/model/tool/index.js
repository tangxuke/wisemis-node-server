/**
 * 工具对象，包含在工具栏内使用
 */
function Tool(){
    //字段区

    /**
     * 工具名称
     */
    this.name='';
    /**
     * 工具标签
     */
    this.label='';
    /**
     * 按钮类型，可选值default,primary,success等，默认primary
     */
    this.type='primary';
    /**
     * 设置按钮是否可用（初始化的时候）
     */
    this.enable=true;
    /**
     * 执行前询问
     */
    this.confirm=false;
    /**
     * 指定动作，如open=打开一个路由
     */
    this.action='open';
    /**
     * 动作参数
     */
    this.params={};



    //设置区

    /**
     * 设置工具名称
     * @param {string} name 工具名称
     * @returns {Tool}
     */
    this.setName=function(name){
        this.name=name;
        return this;
    }

    /**
     * 设置工具名称
     * @param {string} label 工具标签
     * @returns {Tool}
     */
    this.setLabel=function(label){
        this.label=label;
        return this;
    }

    /**
     * 设置工具按钮类型
     * @param {string} type 按钮类型，可选值default,primary,success等，默认primary
     * @returns {Tool}
     */
    this.setType=function(type){
        this.type=type;
        return this;
    }

    /**
     * 设置工具是否可用
     * @param {boolean} enable 是否可用，默认true
     */
    this.setEnable=function(enable){
        this.enable=enable;
        return this;
    }

    /**
     * 设置执行前询问
     * @param {boolean} confirm 是否询问
     * @returns {Tool}
     */
    this.setConfirm=function(confirm){
        this.confirm=confirm;
        return this;
    }


    /**
     * 设定执行的动作
     * @param {string} action 动作类型，目前只支持open
     * @param {object} params 
     */
    this.setAction=function(action,params){
        this.action=action;
        this.params=params;
        return this;
    }

}

module.exports=Tool;