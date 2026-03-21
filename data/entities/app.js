const fs = require('fs');
const data = fs.readFileSync('entities.json', 'utf8');

const entities = JSON.parse(data);

let entitiesMap = {};

for (let entity in entities) {

    if(entities[entity].codepoints.length == 1){
        const codepoint = entities[entity].codepoints[0].toString(16).padStart(6, '0').toUpperCase();

        if (!entitiesMap[codepoint]) {
            entitiesMap[codepoint] = []; // Создаем массив, если ключа нет
        }
        entitiesMap[codepoint].push(entity); // Добавляем имя сущности  
    }
}

let maxLength = 0;
for (let i in entitiesMap) {
    if (entitiesMap[i].length > maxLength) {
        maxLength = entitiesMap[i].length;
    }
}
for (let i in entitiesMap) {
    entitiesMap[i] = entitiesMap[i].sort();
    entitiesMap[i] = entitiesMap[i].sort((a, b) => a.length - b.length);
}

console.log(maxLength);

// const jsContent = `const entitiesMap = ${JSON.stringify(entitiesMap)};\n\nexport default entitiesMap;`;
// fs.writeFileSync("entitiesMap.js", jsContent, "utf8");