var xlsx = require('xlsx');
var fs = require('fs');
/**
 * 预览前后10条记录
 * @param {string} pathname 文件路径
 * @param {string} sheetname 表格名称
 * @returns {Promise<[*]>}
 */
function Preview(pathname, sheetname) {
    if (!fs.existsSync(pathname)) {
        return Promise.reject(new Error('文件不存在！'));
    }
    var workbook = xlsx.readFile(pathname);
    var sheet = workbook.Sheets[sheetname];
    var data = xlsx.utils.sheet_to_json(sheet).map((item,index,arr)=>{
        return {__rowid__:index+1,...item};
    });
    if (data.length > 10)
        data = data.slice(0, 5).concat(data.slice(data.length-5, data.length));
    
    return Promise.resolve(data);
}

/**
 * 返回工作表数据
 * @param {string} pathname 文件路径
 * @param {string} sheetname 工作表名
 */
function GetData(pathname, sheetname) {
    if (!fs.existsSync(pathname)) {
        return Promise.reject(new Error('文件不存在！'));
    }
    var workbook = xlsx.readFile(pathname);
    var sheet = workbook.Sheets[sheetname];
    var data = xlsx.utils.sheet_to_json(sheet);

    return Promise.resolve(data);
}

/**
 * 获取表格列表
 * @param {string} pathname 文件路径
 * @returns {Promise<[string]>}
 */
function GetSheetNames(pathname) {
    console.log(pathname);
    if (!fs.existsSync(pathname)) {
        return Promise.reject(new Error('文件不存在！'));
    }
    var workbook = xlsx.readFile(pathname);
    return Promise.resolve(workbook.SheetNames);
}

module.exports.Preview = Preview;
module.exports.SheetNames = GetSheetNames;
module.exports.GetData = GetData;