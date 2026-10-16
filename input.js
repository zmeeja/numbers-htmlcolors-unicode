const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
    switch (searchType) {
        case "select21":
            render(textInput.value.split("").map(x => x.codePointAt(0)));
            break;
        case "select22":
            textInput.value = textInput.value.replace(/[^0-9.]/g, '');
            render(range(parseInt(textInput.value), parseInt(textInput.value) + 100));
            break;
        case "select23":
            textInput.value = textInput.value.replace(/[^0-1]/g, '');
            render(range(parseInt(textInput.value, 2), parseInt(textInput.value, 2) + 100));
            break;
        case "select24":
            textInput.value = textInput.value.replace(/[^0-7]/g, '');
            render(range(parseInt(textInput.value, 8), parseInt(textInput.value, 8) + 100));
            break;
        case "select25":
            textInput.value = textInput.value.replace(/[^0-9a-fA-F]/g, '').toUpperCase();
            render(range(parseInt(textInput.value, 16), parseInt(textInput.value, 16) + 100));
            break;
        case "select26":
            const entity = textInput.value.trim();
            // console.log(`Searching for entity: ${entity}`);
            for (let i = 0; i <= 120171; i++) {
                // console.log(i);
                let num = new mynumber(i);
                if (num.entities && num.entities.length > 0) {
                    for (j of num.entities) {
                        if (j.startsWith(entity)) {
                                // console.log(`Found entity: ${j} for code point: ${i}`);
                            let arr = Object.keys(entitiesMap).sort().map(x => parseInt(x, 16));
                            let index = arr.indexOf(i);
                                // console.log(`Index of code point ${i} in array: ${index}`);
                                // console.log(typeof i);
                            let res = arr.slice(index);
                            res = res.slice(0, 100); // Ограничиваем результат первыми 100 элементами
                                // console.log(`Resulting array after slicing: ${res}`);
                            render(res);
                            return;
                        }
                    }
                }
            }
        }

    // console.log(textInput.value.split(""));
    // console.log(textInput.value.split("").map(x => x.codePointAt(0)));
});

//console.log("👋".codePointAt(0));