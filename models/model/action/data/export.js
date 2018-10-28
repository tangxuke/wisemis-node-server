var xlsx=require('xlsx');
var path=require('path');
var uuid=require('uuid/v1');

/**
 * 导出数据
 * @param {[*]} data 
 * @returns {Promise<string>}
 */
function ExportData(data){
    var sheet=xlsx.utils.json_to_sheet(data);
    var book=xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book,sheet,'Sheet1');
    var filename=uuid()+'.xlsx';
    var pathname=path.join(__dirname,'../../../../public/downloads/temp',filename);
    xlsx.writeFile(book,pathname);
    return Promise.resolve('http://localhost:3000/downloads/temp/'+filename);
}

module.exports=ExportData;