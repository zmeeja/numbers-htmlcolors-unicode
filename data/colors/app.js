const fs = require('fs');
const data = fs.readFileSync('colors.json', 'utf8');

let colors = JSON.parse(data);
colors = colors.colors;

let colorsMap = {};
let colorsMap1 = [];
let colorsMap2 = [];

for (let i of colors) {
    let x = i.code.replace("#", "");
    
    if (!colorsMap[x]) {
        colorsMap[x]= [];
        colorsMap[x].push(i.name);
    }
    else {
        colorsMap[x].push(i.name);
    }
}

for (let i in colorsMap) {
    if(colorsMap[i].length == 1) {
        colorsMap1.push(i);
    }
    else {
        colorsMap2.push(i);
    }
}

// console.log(colorsMap);
// console.log(colorsMap1);
// console.log(colorsMap2);

const jsContent = `const colorsMap = ${JSON.stringify(colorsMap, null, 2)};`;
fs.writeFileSync("colorsMap.js", jsContent, "utf8");