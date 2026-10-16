const textInput = document.getElementById("textInput");
const DECnumberInput = document.getElementById("DECnumberInput");
const BINnumberInput = document.getElementById("BINnumberInput");
const OCTnumberInput = document.getElementById("OCTnumberInput");
const HEXnumberInput = document.getElementById("HEXnumberInput");
const namedHTMLentityInput = document.getElementById("namedHTMLentityInput");

textInput.addEventListener("input", () => {
    // console.log(textInput.value.split(""));
    // console.log(textInput.value.split("").map(x => x.codePointAt(0)));
    render(textInput.value.split("").map(x => x.codePointAt(0)));
});

DECnumberInput.addEventListener("input", () => {
    DECnumberInput.value = DECnumberInput.value.replace(/[^0-9.]/g, '');
    render(range(parseInt(DECnumberInput.value), parseInt(DECnumberInput.value) + 100));
});

BINnumberInput.addEventListener("input", () => {
    BINnumberInput.value = BINnumberInput.value.replace(/[^0-1]/g, '');
    render(range(parseInt(BINnumberInput.value, 2), parseInt(BINnumberInput.value, 2) + 100));
});

OCTnumberInput.addEventListener("input", () => {
    OCTnumberInput.value = OCTnumberInput.value.replace(/[^0-7]/g, '');
    render(range(parseInt(OCTnumberInput.value, 8), parseInt(OCTnumberInput.value, 8) + 100));
});

HEXnumberInput.addEventListener("input", () => {
    HEXnumberInput.value = HEXnumberInput.value.replace(/[^0-9a-fA-F]/g, '').toUpperCase();
    render(range(parseInt(HEXnumberInput.value, 16), parseInt(HEXnumberInput.value, 16) + 100));
});

function getObjectFromKey(obj, startKey) {
  const keys = Object.keys(obj);
  const startIndex = keys.indexOf(startKey);

  if (startIndex === -1) {
    return {}; // Если ключ не найден, возвращаем пустой объект
  }

  const slicedKeys = keys.slice(startIndex);
  
  return Object.fromEntries(slicedKeys.map(key => [key, obj[key]]));
}

namedHTMLentityInput.addEventListener("input", () => {
    const entity = namedHTMLentityInput.value.trim();
    console.log(`Searching for entity: ${entity}`);
    for (let i = 0; i <= 120171; i++) {
        // console.log(i);
        let num = new mynumber(i);
        for (j of num.entities) {
            if (j.startsWith(entity)) {
                    // console.log(`Found entity: ${j} for code point: ${i}`);
                let arr = Object.keys(entitiesMap).sort().map(x => parseInt(x, 16));
                let index = arr.indexOf(i);
                    // console.log(`Index of code point ${i} in array: ${index}`);
                    // console.log(typeof i);
                let res = index !== -1 ? arr.slice(index) : [];
                    // console.log(`Resulting array after slicing: ${res}`);
                render(res);
                return;
            }
        }
    }

});

//console.log("👋".codePointAt(0));