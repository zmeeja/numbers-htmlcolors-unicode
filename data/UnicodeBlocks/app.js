const fs = require('fs');
const data = fs.readFileSync('Blocks.txt', 'utf8');

const lines = data.split('\n');
let lines2 = [];

let blocksMap = [];

for (let i of lines)
    if((i[0] !== '#') && (i !== ''))
        lines2.push(i);


for (let i of lines2){
    let start = i.split(';')[0].split('..')[0].padStart(6, '0');
    let end = i.split(';')[0].split('..')[1].padStart(6, '0');
    let name = i.split(';')[1].trim();

    blocksMap.push([start, end, name]);
}

const jsContent = `const blocksMap = ${JSON.stringify(blocksMap)};\n\nexport default blocksMap;`;
fs.writeFileSync("blocksMap.js", jsContent, "utf8");