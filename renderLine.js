function renderLine(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    const contener = document.getElementById(contenerID);
    contener.innerHTML = "";
    contener.style.display = "flex";
    contener.style.flexWrap = "wrap";

    q = 1;
    for(let i of x){
        addbox("contener", i);
        q++;
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

        const div1 = document.createElement("div");
        div1.innerHTML = num.unicode;
        div1.style.width = "50px";
        div1.style.height = "1.5em";
        div1.style.lineHeight = "1.5em";
        div1.style.textAlign = "center";
        div1.style.fontSize = "30px";
        div1.style.backgroundColor = num.control ? "red" : "silver";
        div01.appendChild(div1);

        const div2 = document.createElement("div");
        div2.style.display = "flex";
        div2.style.flexDirection = "column";
        div01.appendChild(div2);

            const div21 = document.createElement("div");
            div21.innerHTML = `<b>${num.xi10}</b>`;
            div21.style.flexGrow = 1;
            div2.appendChild(div21);

            const div22 = document.createElement("div");
            div22.innerHTML = `<span style="color: #FF0000">${num.xi16_6.slice(0, 2)}</span><span style="color: #00FF00">${num.xi16_6.slice(2, 4)}</span><span style="color: #0000FF">${num.xi16_6.slice(4, 6)}</span>`;
            div22.style.flexGrow = 1;
            div2.appendChild(div22);

    const div02 = document.createElement("div");
    div02.className = "box02";
    div02.innerHTML = num.unicodeName;
    // div02.style.flexGrow = 1;
    div.appendChild(div02);

    const div03 = document.createElement("div");
    div03.className = "box03";
    div03.style.display = "flex";
    div03.style.flexDirection = "column";
    div03.style.flexGrow = 1;
    div03.style.justifyContent = "end";
    div.appendChild(div03);

        const divColor = document.createElement("div");
        divColor.style.display = "flex";
        divColor.style.color = num.contrastColor;
        divColor.style.backgroundColor = num.color;
        divColor.style.minHeight = "1em";
        div03.appendChild(divColor);

            const divColor1 = document.createElement("div");
            divColor1.innerHTML = num.HTMLcolor1;
            divColor1.style.flexGrow = 1;
            divColor.appendChild(divColor1);

            const divColor2 = document.createElement("div");
            divColor2.innerHTML = num.HTMLcolor2;
            divColor2.style.flexGrow = 1;
            divColor2.style.textAlign = "right";
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