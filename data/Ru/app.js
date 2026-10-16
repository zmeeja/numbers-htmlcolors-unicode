const fs = require('fs');
const data = fs.readFileSync('ru.xml', 'utf8');

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(data, "text/xml");

const data1 = xmlDoc.querySelector('annotation').textContent;
console.log(data1);
