const fs = require('fs');
const xml2js = require('xml2js');

// 1. Читаем файл с диска
fs.readFile('ru.xml', 'utf-8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }

  // 2. Парсим XML в JS-объект
  xml2js.parseString(data, { explicitArray: false }, (parseErr, result) => {
    if (parseErr) {
      console.error('Ошибка парсинга XML:', parseErr);
      return;
    }

    const y1 = {};
    const y2 = {};
    const y3 = {};
    let z1 = 0;
    let z2 = 0;
    let z3 = 0;
    for (let i of result.ldml.annotations.annotation){
        const key = i["$"]["cp"].codePointAt(0).toString(16).toUpperCase().padStart(6, "0");
        const value = i["_"];
        
        if(i["$"]["type"] == "tts"){
            if(y1[key] == undefined){
                y1[key] = [];
                y1[key].push(value);
            }
            else{
                y1[key].push(value);
                if(z1 < y1[key].length){
                    z1 = y1[key].length;
                }
            }
        }
        // else if(i["$"]["draft"] == "contributed"){
        //     if(y2[key] == undefined){
        //         y2[key] = [];
        //         y2[key].push(value);
        //     }
        //     else{
        //         y2[key].push(value);
        //         if(z2 < y2[key].length){
        //             z2 = y2[key].length;
        //         }
        //     }
        // }
        else{
            if(y3[key] == undefined){
                y3[key] = [];
                y3[key].push(value);
            }
            else{
                y3[key].push(value);
                if(z3 < y3[key].length){
                    z3 = y3[key].length;
                }
            }            
        }


    }
    console.log(y1);
    // console.log(y2);

    console.log(Object.keys(y1).length);
    // console.log(Object.keys(y2).length);
    console.log(Object.keys(y3).length);
    console.log(z1);
    // console.log(z2);
    console.log(z3);

    const jsContent = `const unicodeMapRu1 = ${JSON.stringify(y1, null, 2)};`;
    fs.writeFileSync("unicodeMapRu1.js", jsContent, "utf8");

    const jsContent2 = `const unicodeMapRu2 = ${JSON.stringify(y3, null, 2)};`;
    fs.writeFileSync("unicodeMapRu1.js", jsContent2, "utf8");

  });
});
