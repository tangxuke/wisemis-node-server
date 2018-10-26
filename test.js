var xlsx = require('xlsx');

var book = xlsx.readFile('C:\\报关分类.xlsx');
console.log(xlsx.utils.sheet_to_json(book.Sheets['Sheet1']));