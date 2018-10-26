var xlsx = require('xlsx');
var fs = require('fs');
/**
 * 预览前后10条记录
 * @param {string} pathname 文件路径
 * @param {string} sheetname 表格名称
 * @returns {Promise<{fields,values}>}
 */
function Preview(pathname, sheetname) {
    if (!fs.existsSync(pathname)) {
        return Promise.reject(new Error('文件不存在！'));
    }
    var workbook = xlsx.readFile(pathname);
    var sheet = workbook.Sheets[sheetname];
    var data = xlsx.utils.sheet_to_json(sheet);
    if (data.length > 20)
        data = data.slice(0, 9).concat(data.slice(10, 19));
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