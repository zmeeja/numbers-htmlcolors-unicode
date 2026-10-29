function renderMiniBox(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    const contener = document.getElementById(contenerID);
    contener.innerHTML = "";
    contener.style.display = "flex";
    contener.style.flexWrap = "wrap";

    q = 1;
    for(let i of x){
        if(i <= 0xFFFFFF){
            addbox2(contener, i);
            q++;
        }
        else{
            break;
        }
    }

    resizeBoxesHeight("box");
}

function addbox2(contener, x) {
    const num = new mynumber(x);

    const div = document.createElement("div");
    div.className = "box";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.margin = "1px";
    div.style.border = "1px solid black";
    div.style.width = "20px";
    div.style.backgroundColor = num.color;
    div.style.color = num.contrastColor;
    // div.style.height = "200px";
    div.style.textAlign = "center";
    contener.appendChild(div);
    
        const div1 = document.createElement("div");
        div1.innerHTML = `${vertical(num.xi16_6)}`;
        div1.addEventListener('click', () => { 
            navigator.clipboard.writeText(num.xi16_6).then(() => { alert(`Текст "${num.xi16_6}" скопирован в буфер обмена!`); }).catch(err => { console.error('Не удалось скопировать текст:', err); }); 
        });
        div.appendChild(div1);

        if(num.HTMLcolor1){
            const div2 = document.createElement("div");
            div2.style.height = "25px";
            div.appendChild(div2);

            const div3 = document.createElement("div");
            div3.innerHTML = `${vertical(num.HTMLcolor1)}`;
            div3.addEventListener('click', () => { 
                navigator.clipboard.writeText(num.HTMLcolor1).then(() => { alert(`Текст "${num.HTMLcolor1}" скопирован в буфер обмена!`); }).catch(err => { console.error('Не удалось скопировать текст:', err); }); 
            });
            div.appendChild(div3);
        }
        if(num.HTMLcolor2){
            const div4 = document.createElement("div");
            div4.style.height = "25px";
            div.appendChild(div4);

            const div5 = document.createElement("div");
            div5.innerHTML = `${vertical(num.HTMLcolor2)}`;
            div5.addEventListener('click', () => { 
                navigator.clipboard.writeText(num.HTMLcolor2).then(() => { alert(`Текст "${num.HTMLcolor2}" скопирован в буфер обмена!`); }).catch(err => { console.error('Не удалось скопировать текст:', err); }); 
            });
            div.appendChild(div5);
        }
}

function vertical(str){
    result = "";
    for(let i of str){
        result += i + "<br>"; 
    }
    return result.slice(0, -4);
}

function resizeBoxesHeight(className) {
    const boxes = document.querySelectorAll(`.${className}`);
    let maxHeight = 0;
    boxes.forEach(b => { b.style.height = 'auto'; });
    boxes.forEach(b => { maxHeight = Math.max(maxHeight, b.offsetHeight); });
    boxes.forEach(b => { b.style.height = maxHeight + 'px'; });
}