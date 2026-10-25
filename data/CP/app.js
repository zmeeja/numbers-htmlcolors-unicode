const fs = require('fs');

for (let i of ['CP437', 'CP866', 'CP1251', 'CP1252']){
    const data = fs.readFileSync(`${i}.TXT`, 'utf8');


    const lines = data.split('\n');
    const CPMap = {};

    for (let i of lines){
        if(i.startsWith('0x')){
            CPMap[i.split("	")[0]] = i.split("	")[1]; 
        }
    }

    const jsContent = `const ${i}Map = ${JSON.stringify(CPMap, null, 2)};`;
    fs.writeFileSync(`${i}Map.js`, jsContent, "utf8");
}