const fs = require('fs');
//const data = fs.readFileSync('UnicodeData.txt', 'utf8');
const data = fs.readFileSync('UnicodeDataRu.txt', 'utf8');

const lines = data.split('\n');
const unicodeMap = {};

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



// const jsContent = `const unicodeMap = ${JSON.stringify(unicodeMap)};\n\nexport default unicodeMap;`;
// fs.writeFileSync("unicodeMap.js", jsContent, "utf8");

const jsContent = `const unicodeMapRu = ${JSON.stringify(unicodeMap)};\n\nexport default unicodeMapRu;`;
fs.writeFileSync("unicodeMapRu.js", jsContent, "utf8");



// fs.writeFileSync("data.js", data, "utf8");


