const fs = require('fs');
const data = fs.readFileSync(`unimathsymbols.txt`, 'utf8');

const lines = data.split('\n');

const LaTeXmap = {};

for (let i of lines){
    if(i[0] != "#"){
        if(i.split("^")[2] != ""){
            LaTeXmap[i.split("^")[0].padStart(6, "0")] = i.split("^")[2];
        }
    }
}

const jsContent = `const LaTeXmap = ${JSON.stringify(LaTeXmap, null, 2)};`;
fs.writeFileSync("LaTeXmap.js", jsContent, "utf8");