//const { start } = require("repl");

function* rangeGen(x1, x2 = undefined, step = 1) {
    if (typeof x1 == "string") {
        x1 = parseInt(x1, 16);
    }
    if (typeof x2 == "string") {
        x2 = parseInt(x2, 16);
    }

    let start, stop;
    
    if (x2 === undefined) {
        [start, stop] = [0, x1];
    }
    else {
        [start, stop] = [x1, x2];
    }
    
    if (step === 0) {
        throw new Error("range() step must not be zero");
    }

    if (step > 0) {
        for (let i = start; i < stop; i += step) {
            yield i;
        }
    } else {
        for (let i = start; i > stop; i += step) {
            yield i;
        }
    }
}

function range(x1, x2 = undefined, step = 1) {
    return [...rangeGen(x1, x2, step)];
}

class rangeDict {
    constructor(x1, x2, x3) {
        this.array = [];
        this.set(x1, x2, x3);
    }

    set(x1, x2, x3) {
        if (this.#setRange(x1, x2, x3)) return;
        if (typeof x1 == "object"){
            if (this.#setArray(x1)) return;
            this.#setArrayArray(x1);
        }
    }

    #setRange(start, stop, value) {
        if ((typeof start == "string") && (typeof stop == "string") && (typeof value !== "undefined")) {
            start = parseInt(start, 16);
            stop = parseInt(stop, 16);
            this.#entryRange(start, stop, value);
            this.array.sort((a, b) => a[0] - b[0]);
            return true;
        }
        if ((typeof start == "number") && (typeof stop == "number") && (typeof value !== "undefined")) {
            this.#entryRange(start, stop, value);
            this.array.sort((a, b) => a[0] - b[0]);
            return true;
        }
        return false;
    }

    #setArray(x) {
        let [start, stop, value] = x;
        return this.#setRange(start, stop, value);
    }

    #setArrayArray(x) {
        let result = false;
        for (let [start, stop, value] of x) {
            result = this.#setRange(start, stop, value);
        }
        return result;
    }

    #entryRange(start, stop, value) {
        for (let i in this.array) {
            if (start == this.array[i][0] && stop == this.array[i][1]) {
                if (this.array[i][2] == value){
                    return;
                }
                else{
                    this.array[i][2] = value;
                    return;
                }
            }
        }
        this.array.push([start, stop, value]);
        return;
    }

    get(key) {
        if (typeof key == "string") {
            key = parseInt(key, 16);
        }

        const result = [];
        for (let [start, stop, value] of this.array) {
            if (start <= key && key <= stop) {
                result.push(value);
            }
        }

        if (result.length === 0) return undefined;
        if (result.length === 1) return result[0];
        return result;
    }

    get length() {
        return this.array.length;
    }

    // Добавляем итератор
    *[Symbol.iterator]() {
        for (let i of this.array) {
            yield i;
        }
    }
}

// let x = new rangeDict();
// for(let i in x){
//     console.log(i);
// }

// greyMap = [...range(0, 256)].map(x => "0x" + x.toString(16).padStart(2, "0") + x.toString(16).padStart(2, "0") + x.toString(16).padStart(2, "0"));
// console.log(greyMap);