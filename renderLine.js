function renderLine(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    document.getElementById(contenerID).innerHTML = "";

    q = 1;
    for(let i of x){
        addspan("contener", i);
        q++;
    }
}

function addspan(ID, x) {
    let num = new mynumber(x);

    let span = document.createElement("span");
    span.style.backgroundColor = num.control ? "pink" : "GhostWhite";
    addinnerspan(span, `"${num.unicode ?? ""}" `, `font-family: 'unifont', 'unifont_jp', 'unifont_upper', 'unifont_csur'; background-color: ${num.color}; color: ${num.contrastColor};`);
    addinnerspan(span, `D:${num.xi10} `, "color: silver");
    addinnerspan(span, `H:${num.xi16}`, "color: silver");

    document.getElementById(ID).appendChild(span);
    document.getElementById(ID).append(" ");
}

function addinnerspan(externalspan, innerHTML, style = ""){
    let span = document.createElement("span");
    span.innerHTML = innerHTML;
    span.style = style;

    externalspan.appendChild(span);
}