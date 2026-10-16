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
            const result = [];
            for (let i = 0; i <= 120171; i++) {
                let num = new mynumber(i);
                if (num.entities && num.entities.length > 0) {
                    for (j of num.entities) {
                        if (j.includes(entity)) {
                            result.push(i);
                            break; 
                        }
                    }
                }
            }
            render(result);
            break;
        case "select27":
            const input2 = textInput.value.trim();
            const result2 = [];
            for (let i = 0; i <= 120171; i++) {
                let num = new mynumber(i);
                if (num.unicodeName && num.unicodeName.length > 0) {
                    if (num.unicodeName.includes(input2)) {
                        result2.push(i);
                    }
                }
                if (result2.length >= 100) {
                    break; 
                }
            }
            render(result2);
            break;
        }

    // console.log(textInput.value.split(""));
    // console.log(textInput.value.split("").map(x => x.codePointAt(0)));
});

//console.log("👋".codePointAt(0));