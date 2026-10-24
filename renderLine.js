function renderLine(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    const contener = document.getElementById(contenerID);
    contener.innerHTML = "";
    contener.style.display = "flex";
    contener.style.flexWrap = "wrap";

    q = 1;
    for(let i of x){
        if(i <= 0xFFFFFF){
            addbox("contener", i);
            q++;
        }
        else{
            break;
        }
    }

    resizeBoxesHeight("box");
    // resizeBoxes("box01");
    // resizeBoxes("box02");
    // resizeBoxes("box03");


}

function addbox(ID, x) {
    contener = document.getElementById(ID);
    const num = new mynumber(x);

    const div = document.createElement("div");
    div.className = "box";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    // div.style.margin = "1px";
    // div.style.border = "1px solid black";
    div.style.width = "200px";
    // div.style.backgroundColor = num.color;
    contener.appendChild(div);
    
    const div01 = document.createElement("div");
    div01.className = "box01";
    div01.style.display = "flex";
    // div01.style.flexGrow = 1;
    div.appendChild(div01);


        if(num.xi10 <= 0x10FFFF){
            const div1 = document.createElement("div");
            div1.style.width = "55px";
            div1.style.height = "1.5em";
            div1.innerHTML = `${num.unicode}`;
            div1.style.lineHeight = "1.5em";
            div1.style.textAlign = "center";
            div1.style.fontSize = "30px";
            div1.style.flexShrink = "0";
            div1.style.backgroundColor = num.control ? "red" : "silver";
            div1.addEventListener('click', () => { 
                navigator.clipboard.writeText(num.unicode).then(() => { alert(`Текст "${num.unicode}" скопирован в буфер обмена!`); }).catch(err => { console.error('Не удалось скопировать текст:', err); }); 
            });
            div1.addEventListener('mouseenter', () => { div1.innerHTML = `"${num.unicode}"`; });
            div1.addEventListener('mouseleave', () => { div1.innerHTML = `${num.unicode}`; });
            div01.appendChild(div1);
        }
        

        const div2 = document.createElement("div");
        div2.style.display = "flex";
        div2.style.flexWrap = "wrap";
        div2.style.flexDirection = "row";
        // div2.style.width = "145px";
        // div2.style.flexGrow = 1;
        div01.appendChild(div2);

            const div21 = document.createElement("div");
            div21.style.flexGrow = 1;
            div21.style.minWidth = "72.5px";
            div21.style.height = "22.5px";
            div21.style.boxSizing = "border-box";
            div2.appendChild(div21);

            const div22 = document.createElement("div");
            div22.innerHTML = `<span onclick="copyText(this)"><b>${num.xi10}</b></span>`;
            div22.style.flexGrow = 1;
            div22.style.textAlign = "right";
            div22.style.paddingRight = "2px";
            div22.style.minWidth = "72.5px";
            div22.style.height = "22.5px";
            div22.style.boxSizing = "border-box";
            div2.appendChild(div22);

            const div23 = document.createElement("div");
            div23.style.flexGrow = 1;
            div23.style.paddingLeft = "2px";
            div23.innerHTML = `<span onclick="copyText(this)"><span style="color: #FF0000">${num.xR}</span><span style="color: #00FF00">${num.xG}</span><span style="color: #0000FF">${num.xB}</span></span>`;
            div23.style.minWidth = "72.5px";
            div23.style.height = "22.5px";
            div23.style.boxSizing = "border-box";
            div2.appendChild(div23);

            const div24 = document.createElement("div");
            div24.innerHTML = `<span onclick="copyText(this)"><span style="color: #FF0000">${num.xi16_6.slice(0, 2)}</span><span style="color: #00FF00">${num.xi16_6.slice(2, 4)}</span><span style="color: #0000FF">${num.xi16_6.slice(4, 6)}</span></span>`;
            div24.style.flexGrow = 1;
            div24.style.textAlign = "right";
            div24.style.paddingRight = "2px";
            div24.style.minWidth = "72.5px";
            div24.style.height = "22.5px";
            div24.style.boxSizing = "border-box";
            div2.appendChild(div24);

    if(num.xi10 <= 0x10FFFF){
        const div02 = document.createElement("div");
        div02.className = "box02";
        div02.innerHTML = `<span onclick="copyText(this)">${num.unicodeName}</span>`;
        div02.style.lineHeight = "1.2em";
        div02.style.minHeight = "1.2em";
        div02.style.paddingLeft = "2px";
        // div02.style.flexGrow = 1;
        div.appendChild(div02);
    }

    if(num.unicodeNameRu){
        const div05 = document.createElement("div");
        div05.className = "box02";
        div05.innerHTML = `<span onclick="copyText(this)">${num.unicodeNameRu}</span>`;
        div05.style.lineHeight = "1.2em";
        div05.style.minHeight = "1.2em";
        div05.style.paddingLeft = "2px";
        div05.style.color = "silver";
        div.appendChild(div05);
    }

    if(num.entities){
        const div04 = document.createElement("div");
        div04.innerHTML = `
            ${num.entities[0] ? `<span onclick="copyText(this)">&amp;${num.entities[0].slice(1)}</span>` : ""} 
            ${num.entities[1] ? `<span onclick="copyText(this)">&amp;${num.entities[1].slice(1)}</span>` : ""} 
            ${num.entities[2] ? `<span onclick="copyText(this)">&amp;${num.entities[2].slice(1)}</span>` : ""} 
            ${num.entities[3] ? `<span onclick="copyText(this)">&amp;${num.entities[3].slice(1)}</span>` : ""} 
            ${num.entities[4] ? `<span onclick="copyText(this)">&amp;${num.entities[4].slice(1)}</span>` : ""} 
            ${num.entities[5] ? `<span onclick="copyText(this)">&amp;${num.entities[5].slice(1)}</span>` : ""}`;
        div04.style.color = "Orchid";
        div04.style.lineHeight = "1.2em";
        div04.style.paddingLeft = "2px";
        div.appendChild(div04);
    }

    const div03 = document.createElement("div");
    div03.style.flexGrow = 1;
    div.appendChild(div03);

    const divColor = document.createElement("div");
    divColor.style.display = "flex";
    divColor.style.color = num.contrastColor;
    divColor.style.backgroundColor = num.color;
    div.appendChild(divColor);

        const divColor1 = document.createElement("div");
        divColor1.innerHTML = `<span onclick="copyText(this)">${num.HTMLcolor1}</span>`;
        divColor1.style.flexGrow = 1;
        divColor1.style.lineHeight = "1.2em";
        divColor1.style.minHeight = "1.2em";
        divColor1.style.paddingLeft = "2px";
        divColor.appendChild(divColor1);

        const divColor2 = document.createElement("div");
        divColor2.innerHTML = `<span onclick="copyText(this)">${num.HTMLcolor2}</span>`;
        divColor2.style.flexGrow = 1;
        divColor2.style.lineHeight = "1.2em";
        divColor2.style.textAlign = "right";
        divColor2.style.paddingRight = "2px";
        divColor.appendChild(divColor2);
}



function resizeBoxes(className) {
    const boxes = document.querySelectorAll(`.${className}`);
    let maxWidth = 0;
    let maxHeight = 0;

    // Сначала сбрасываем размеры
    boxes.forEach(b => { b.style.width = 'auto'; b.style.height = 'auto'; });

    // Находим максимальные
    boxes.forEach(b => {
    maxWidth = Math.max(maxWidth, b.offsetWidth);
    maxHeight = Math.max(maxHeight, b.offsetHeight);
    });

    // Применяем
    boxes.forEach(b => {
    b.style.width = maxWidth + 'px';
    b.style.height = maxHeight + 'px';
    });
}

function resizeBoxesHeight(className) {
    const boxes = document.querySelectorAll(`.${className}`);
    let maxHeight = 0;
    boxes.forEach(b => { b.style.height = 'auto'; });
    boxes.forEach(b => { maxHeight = Math.max(maxHeight, b.offsetHeight); });
    boxes.forEach(b => { b.style.height = maxHeight + 'px'; });
}