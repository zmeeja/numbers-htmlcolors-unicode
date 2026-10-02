const textInput = document.getElementById("textInput");
const DECnumberInput = document.getElementById("DECnumberInput");
const BINnumberInput = document.getElementById("BINnumberInput");
const OCTnumberInput = document.getElementById("OCTnumberInput");
const HEXnumberInput = document.getElementById("HEXnumberInput");

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


//console.log("👋".codePointAt(0));