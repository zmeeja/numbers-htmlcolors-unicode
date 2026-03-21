const textInput = document.getElementById("textInput");
const numberInput = document.getElementById("numberInput");

textInput.addEventListener("input", () => {
    // console.log(textInput.value.split(""));
    // console.log(textInput.value.split("").map(x => x.codePointAt(0)));
    render(textInput.value.split("").map(x => x.codePointAt(0)));
});

numberInput.addEventListener("input", () => {
    render([numberInput.value]);
});


//console.log("👋".codePointAt(0));