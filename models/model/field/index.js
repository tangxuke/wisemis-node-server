var SetFieldFromRow = require('./from-row');
var Script = require('../script');

/**
 * 字段对象
 */
function Field() {
    /**
     * 后台字段名称
     */
    this.Name = '';
    /**
     * 字段表达式
     */
    this.FieldExpr = '';
    /**
     * 字段标题
     */
    this.Title = '';
    /**
     * 字段类型：string - 文本型（默认），boolean - 布尔型，date - 日期型，暂时这几样
     */
    this.Type = 'string';
    /**
     * 字段长度
     */
    this.FieldLength = 50;
    /**
     * 网格列宽度，单位是px，默认80px
     */
    this.Width = 80;
    /**
     * 表单跨列数，默认1列，最多以表单对象定义的列数为准
     */
    this.ColSpan = 1;
    /**
     * 控件类型
     */
    this.ControlType = 'my-textbox';
    /**
     * 字段值
     */
    this.Value = '';
    /**
     * 字段图标，如果有的话
     */
    this.Icon = '';
    /**
     * 新增时是否保存此字段
     */
    this.IsInsert = true;
    /**
     * 修改时是否保存此字段
     */
    this.IsUpdate = true;
    /**
     * 是否关键字段
     */
    this.IsKey = false;
    /**
     * 是否自增长字段
     */
    this.IsId = false;
    /**
     * 设置是否自增长字段
     * @param {boolean} value 是否自增长字段
     * @returns {Field}
     */
    this.setIsId = function(value) {
            this.IsId = value;
            return this;
        }
        /**
         * 是否不允许空
         */
    this.IsNotNull = false;
    /**
     * 设置是否不允许空
     * @param {boolean} value 是否不允许空
     * @returns {Field}
     */
    this.setIsNotNull = function(value) {
            this.IsNotNull = value;
            return this;
        }
        /**
         * 在网格中显示
         */
    this.ShowInGrid = true;
    /**
     * 在表单中显示
     */
    this.ShowInForm = true;
    /**
     * 默认值
     */
    this.DefaultValue = '';
    /**
     * 更改前值
     */
    this.OldValue = null;

    /**
     * 是否搜索字段
     */
    this.SearchField = false;
    /**
     * 查询表达式
     */
    this.SearchExpr = '';
    /**
     * 设置搜索字段
     * @param {boolean} value 是否搜索字段
     * @returns {Field}
     */
    this.setSearchField = function(value) {
        this.SearchField = value;
        return this;
    }

    /**
     * 检查值是否更改
     */
    this.CheckIsChanged = function() {
        return this.Value !== this.OldValue;
    }

    /**
     * 绑定到字段的事件脚本
     */
    this.Scripts = [];
    /**
     * 获取绑定到字段的事件脚本
     * @returns {Script[]}
     */
    this.getScripts = function() {
        return this.Scripts;
    }

    /**字段所在页面 */
    this.Page = '';
    /**
     * 设置字段所在页面
     * @param {string} page 页面名称
     * @returns {Field}
     */
    this.setPage = function(page) {
        this.Page = page;
        return this;
    }

    /**
     * 设置属性值
     * @param {string} name 属性名
     * @param {any} value 属性值
     * @returns {Field} 返回对象本身
     */
    this.setPropertyValue = function(name, value) {
        if (this[name] == undefined)
            throw new Error(`提示：属性 ${name} 未定义！`);
        else
            this[name] = value;

        return this;
    }

    /**
     * 设置字段名称
     * @param {string} name 字段名称
     * @returns {Field} 返回对象本身
     */
    this.setName = function(name) {
        this.Name = name;
        return this;
    };
    /**
     * 设置字段表达式
     * @param {string} expr 字段表达式
     * @returns {Field}
     */
    this.setFieldExpr = function(expr) {
            this.FieldExpr = expr;
            return this;
        },
        /**
         * 设置字段标题
         * @param {string} title 字段标题
         * @returns {Field} 返回对象本身
         */
        this.setTitle = function(title) {
            this.Title = title;
            return this;
        }
        /**
         * 设置字段类型
         * @param {string} type 字段类型，可选值：text,boolean,date
         * @returns {Field} 返回对象本身
         */
    this.setType = function(type) {
            this.Type = type;
            return this;
        }
        /**
         * 设置后台字段长度
         * @param {number} len 后台字段长度
         * @returns {Field}
         */
    this.setFieldLength = function(len) {
            this.FieldLength = len;
            return this;
        }
        /**
         * 设置表单跨列数
         * @param {number} count 列数
         * @returns {Field} 返回对象本身
         */
    this.setColSpan = function(count) {
        this.ColSpan = count;
        return this;
    };
    /**
     * 设置控件类型
     * @param {string} control 可选值：textbox,checkbox,datepicker等
     * @returns {Field} 返回对象本身
     */
    this.setControlType = function(control) {
            this.ControlType = control;
            return this;
        }
        /**
         * 设置字段值
         * @param {any} value 字段值
         * @returns {Field} 返回对象本身
         */
    this.setValue = function(value) {
            this.Value = value;
            return this;
        }
        /**
         * 设置图标
         * @param {string} icon 图标名称
         * @returns {Field} 返回对象本身
         */
    this.setIcon = function(icon) {
        this.Icon = icon;
        return this;
    }

    /**
     * 设置主键
     * @param {boolean} value
     * @returns {Field}
     */
    this.setIsKey = function(value) {
        this.IsKey = value;
        return this;
    }

    /**
     * 是否支持插入
     * @param {boolean} value 
     * @returns {Field}
     */
    this.setIsInsert = function(value) {
        this.IsInsert = value;
        return this;
    }

    /**
     * 是否支持修改
     * @param {boolean} value 
     * @returns {Field}
     */
    this.setIsUpdate = function(value) {
        this.IsUpdate = value;
        return this;
    }

    /**
     * 设置默认值
     * @param {any} value
     * @returns {Field}
     */
    this.setDefaultValue = function(value) {
        this.DefaultValue = value;
        return this;
    }

    /**
     * 设置网格列宽度
     * @param {number} value 网格列宽度，单位：px，默认80
     * @returns {Field}
     */
    this.setWidth = function(value) {
        this.Width = value;
        return this;
    }

    /**
     * 在表单中显示
     * @param {boolean} show 是否显示
     * @returns {Field}
     */
    this.setShowInForm = function(show) {
        this.ShowInForm = show;
        return this;
    }

    /**
     * 在网格中显示
     * @param {boolean} show 是否显示
     * @returns {Field}
     */
    this.setShowInGrid = function(show) {
        this.ShowInGrid = show;
        return this;
    }

    /**
     * 排序号
     */
    this.OrderId = 0;
    /**
     * 设置排序号
     * @param {number} orderid 排序号
     * @returns {Field}
     */
    this.setOrderId = function(orderid) {
        this.OrderId = orderid;
        return this;
    }

    /**
     * 正则表达式
     */
    this.RegExpression = '';
    /**
     * 设置正则表达式
     * @param {string} regExpr 正则表达式
     * @returns {Field}
     */
    this.setRegExpression = function(regExpr) {
        this.RegExpression = regExpr;
        return this;
    }

    /**是否系统内置字段 */
    this.System = false;
    /**
     * 设置是否系统内置字段
     * @param {boolean} system 是否系统内置字段
     * @returns {Field}
     */
    this.setSystem = system => {
        this.System = system;
        return this;
    }

    /**提示信息 */
    this.ToolTip = '';
    /**
     * 设置提示信息
     * @param {string} info 提示信息
     * @returns {Field}
     */
    this.setToolTip = function(info) {
        this.ToolTip = info;
        return this;
    }

    /**数据源类型 */
    this.DataSourceType = '';
    /**
     * 设置数据源类型
     * @param {string} type 数据源类型
     * @returns {Field}
     */
    this.setDataSourceType = function(type) {
        this.DataSourceType = type;
        return this;
    }

    /**数据源 */
    this.DataSource = '';
    /**
     * 设置数据源
     * @param {string} code 数据源代码
     * @returns {Field}
     */
    this.setDataSource = function(code) {
        this.DataSource = code;
        return this;
    }

    /**数据源查询的返回字段 */
    this.DataSourceSQLReturnField = '';
    /**
     * 设置数据源查询的返回字段
     * @param {string} field 返回字段
     * @returns {Field}
     */
    this.setDataSourceSQLReturnField = function(field) {
        this.DataSourceSQLReturnField = field;
        return this;
    }

    /**数据库查询的数据库 */
    this.DataSourceSQLDatabase = '';
    /**
     * 设置数据库查询的数据库
     * @param {string} database 数据库
     * @returns {Field}
     */
    this.setDataSourceSQLDatabase = function(database) {
        this.DataSourceSQLDatabase = database;
        return this;
    }

    /**控件高度（1单位=32px） */
    this.ControlHeight = 1;
    /**
     * 设置控件高度
     * @param {number} height 控件高度（1单位=32px）
     * @returns {Field}
     */
    this.setControlHeight = function(height) {
        this.ControlHeight = height;
        return this;
    }

    /**
     * 返回数据库字段类型
     * @returns {string}
     */
    this.getSQLType = function() {
        switch (this.Type) {
            case 'string':
                if (this.FieldLength <= 255)
                    return 'varchar(' + this.FieldLength + ')';
                else
                    return 'text';
            case 'number':
                return 'float';
            case 'time':
                return 'datetime';
            case 'date':
                return 'datetime';
            case 'boolean':
                return 'bit'
            default:
                return 'varchar(255)';
        }
    }

    this.getSQLValue = function() {
        switch (typeof this.Value) {
            case 'string':
                return `'` + this.Value + `'`;
            case 'boolean':
                return this.Value ? '1' : '0';
            default:
                return '' + this.Value;
        }
    }

    /**
     * 从数据行设置字段
     * @param {any} row 数据行
     * @returns {Field}
     */
    this.setFieldFromRow = function(row) {
        SetFieldFromRow(this, row);
        return this;
    }
}
module.exports = Field;