
/**
 * 字段对象
 */
function Field(){
    /**
     * 后台字段名称
     */
    this.Name='';
    /**
     * 字段标题
     */
    this.Title='';
    /**
     * 字段类型：string - 文本型（默认），boolean - 布尔型，date - 日期型，暂时这几样
     */
    this.Type='text';
    /**
     * 网格列宽度，单位是px，默认80px
     */
    this.Width=80;
    /**
     * 表单跨列数，默认1列，最多以表单对象定义的列数为准
     */
    this.ColSpan=1;
    /**
     * 控件类型
     */
    this.ControlType='Input';
    /**
     * 备选值
     */
    this.Options=[];
    /**
     * 字段值
     */
    this.Value=null;
    /**
     * 字段图标，如果有的话
     */
    this.Icon='';




    /**
     * 设置备选值
     * @param {string} label 显示值
     * @param {any} value 字段值
     * @returns {Field} 返回对象本身
     */
    this.setOption=function(label,value){
        this.Options.push({label,value})
        return this;
    };
    /**
     * 设置字段名称
     * @param {string} name 字段名称
     * @returns {Field} 返回对象本身
     */
    this.setName=function(name){
        this.Name=name;
        return this;
    };
    /**
     * 设置字段标题
     * @param {string} title 字段标题
     */
    this.setTitle=function(title){
        this.Title=title;
        return this;
    }
    /**
     * 设置字段类型
     * @param {string} type 字段类型，可选值：text,boolean,date
     * @default 'text'
     * @returns {Field} 返回对象本身
     */
    this.setType=function(type){
        this.Type=type;
        return this;
    }
    /**
     * 设置表单跨列数
     * @param {number} count 列数
     * @returns {Field} 返回对象本身
     */
    this.setColSpan=function(count){
        this.ColSpan=count;
        return this;
    };
    /**
     * 设置控件类型
     * @param {string} control 可选值：textbox,checkbox,datepicker等
     * @returns {Field} 返回对象本身
     */
    this.setControlType=function(control){
        this.ControlType=control;
        return this;
    }
    /**
     * 设置字段值
     * @param {any} value 字段值
     * @returns {Field} 返回对象本身
     */
    this.setValue=function(value){
        this.Value=value;
        return this;
    }
    /**
     * 设置图标
     * @param {string} icon 图标名称
     */
    this.setIcon=function(icon){
        this.Icon=icon;
        return this;
    }
}
module.exports=Field;