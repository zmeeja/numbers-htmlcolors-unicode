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
            for (let i of Object.keys(entitiesMap).sort().map(x => parseInt(x, 16))) {
                let num = new mynumber(i);
                for (j of num.entities) {
                    if (j.includes(entity)) {
                        result.push(i);
                        break;
                    }
                }
                
            }
            render(result);
            break;
        case "select27":
            const input2 = textInput.value.trim().toLowerCase();
            const result2 = [];
            for (let i = 0; i <= parseInt("10FFFF", 16); i++) {
                let num = new mynumber(i);
                if (num.unicodeName && num.unicodeName.length > 0) {
                    if (num.unicodeName.toLowerCase().includes(input2)) {
                        result2.push(i);
                    }
                }
                if (result2.length >= 100) {
                    break; 
                }
            }
            render(result2);
            break;
        case "select28":
            const input3 = textInput.value.trim().toLowerCase();
            const result3 = [];
            for (let i of Object.keys(colorsMap).sort().map(x => parseInt(x, 16))) {
                let num = new mynumber(i);
                if (num.HTMLcolor1.toLowerCase().includes(input3)) {
                    result3.push(i);
                    continue;
                }
                if (num.HTMLcolor2 && num.HTMLcolor2.length > 0) {
                    if (num.HTMLcolor2.toLowerCase().includes(input3)) {
                        result3.push(i);
                    }
                }
            }
            render(result3);
            break;
        case "select29":
            const input4 = textInput.value.trim().toLowerCase();
            const result4 = [];
            const arr1 = Object.keys(unicodeMapRu1);
            const arr2 = Object.keys(controlCharactersMap);
            for (let i of [...new Set([...arr1, ...arr2])].sort().map(x => parseInt(x, 16))) {
                let num = new mynumber(i);
                if (num.unicodeNameRu && num.unicodeNameRu.length > 0) {
                    if (num.unicodeNameRu.toLowerCase().includes(input4)) {
                        result4.push(i);
                    }
                }
                if (result4.length >= 100) {
                    break; 
                }
            }
            render(result4);
            break;
        case "select30":
            const input5 = textInput.value.trim().toLowerCase();
            const result5 = [];
            for (let i of Object.keys(LaTeXmap).sort().map(x => parseInt(x, 16))) {
                let num = new mynumber(i);
                if (num.LaTeX && num.LaTeX.length > 0) {
                    if (num.LaTeX.toLowerCase().includes(input5)) {
                        result5.push(i);
                    }
                }
                if (result5.length >= 100) {
                    break; 
                }
            }
            render(result5);
            break;
        }

    // console.log(textInput.value.split(""));
    // console.log(textInput.value.split("").map(x => x.codePointAt(0)));
});

//console.log("👋".codePointAt(0));



document.getElementById("myRange1").addEventListener("input", () => {
    rangeInput();
});
document.getElementById("myRange2").addEventListener("input", () => {
    rangeInput();
});
document.getElementById("myRange3").addEventListener("input", () => {
    rangeInput();
});

function rangeInput(){
    let x = document.getElementById("myRange1").value;
    let y = document.getElementById("myRange2").value;
    let z = document.getElementById("myRange3").value;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    z = parseInt(z, 10);
    x = x.toString(16).padStart(2, "0");
    y = y.toString(16).padStart(2, "0");
    z = z.toString(16).padStart(2, "0");

    let result = x + y + z;
    
    render(range(parseInt(result, 16), parseInt(result, 16) + 1));
}