const fs = require('fs');
const data = fs.readFileSync('UnicodeData.csv', 'utf8');
const data2 = fs.readFileSync('UnicodeDataRu.csv', 'utf8');

const lines = data.split('\n');
const unicodeMap = {};

const lines2 = data2.split('\n');
const unicodeMap2 = {};

lines.forEach(line => {
    const parts = line.split(';');
    key = parts[0];
    if (key.length == 4) {
        key = "00" + key;
    }
    if (key.length == 5) {
        key = "0" + key;
    }
    unicodeMap[key] = [parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8], parts[9], parts[10], parts[11], parts[12], parts[13], parts[14]];
});

lines2.forEach(line => {
    const parts = line.split(';');
    key = parts[0];
    if (key.length == 4) {
        key = "00" + key;
    }
    if (key.length == 5) {
        key = "0" + key;
    }
    unicodeMap2[key] = [parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8], parts[9], parts[10], parts[11], parts[12], parts[13], parts[14]];
});



const jsContent = `const unicodeMap = ${JSON.stringify(unicodeMap, null, 2)};`;
fs.writeFileSync("unicodeMap.js", jsContent, "utf8");

const jsContent2 = `const unicodeMapRu = ${JSON.stringify(unicodeMap2, null, 2)};`;
fs.writeFileSync("unicodeMapRu.js", jsContent2, "utf8");


