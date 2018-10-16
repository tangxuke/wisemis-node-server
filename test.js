const XmlReader = require('xml-reader');
const reader = XmlReader.create();
const xml =
    `<Button type="success">{{test}}</Button>`;
 
reader.on('done', data => console.log(data.attributes));
reader.parse(xml);