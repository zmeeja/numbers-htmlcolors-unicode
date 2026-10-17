function renderTable(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    // console.log(`renderTable(x = ${x}, contenerID = ${contenerID})`);

    document.getElementById(contenerID).innerHTML = "";
    document.getElementById(contenerID).innerHTML = 
    `
    <table id="numbertable">
        <tr>
            <td></td>
            <td></td>
            <td><b>OCT:</b><br>\\0XX</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>HEX²:</b><br>rgb(X X X)<br>rgb(X X X / α)<br>rgb(X, X, X)<br>rgba(X, X, X, α)</td>
            <td><b>DEC:</b><br>&#X;</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><b>HEX:</b><br>\\xXX<br>\\uXXXX<br>\\u{XXXXX}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>HEX:</b><br>#XXXXXX</td>
            <td><b>HEX:</b><br>&#xX;</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="text-align: center; color: blue;">bytes<br>↓<br>text</td>
            <td style="text-align: center; color: lime;">text<br>↓<br>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td style="text-align: center; color: Fuchsia;">color<br>↓<br>text<br>(hex code)</td>
            <td style="text-align: center; color: Fuchsia;">color<br>↓<br>text<br>(3 dec numbers)</td>
            <td style="text-align: center; color: red;">text<br>↓<br>bytes</td>
            <td style="text-align: center; color: red;">text<br>↓<br>bytes</td>
            <td style="text-align: center; color: lime;">text<br>↓<br>text</td>
            <td style="text-align: center; color: lime;">text<br>↓<br>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td style="text-align: center; color: Fuchsia;">color<br>↓<br>text</td>
            <td style="text-align: center; color: lime;">text<br>↓<br>text</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align: center;">total</td>
            <td style="text-align: center;">64</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style="text-align: center;">16 777 216</td>
            <td style="text-align: center;">16 777 216</td>
            <td style="text-align: center;">1 114 112</td>
            <td style="text-align: center;">1 114 112</td>
            <td style="text-align: center;">1 114 112</td>
            <td style="text-align: center;">1 114 112</td>
            <td></td>
            <td></td>
            <td></td>
            <td style="text-align: center;">139</td>
            <td></td>
            <td></td>
        </tr>
        <tr style="text-align: center; background-color: gold;">
            <td><b>Unicode symbol</b></td>
            <td><b>base64</b><br>6bit</td>
            <td><b>named<br>escape<br>sequence</b></td>
            <td><b>DEC</b><br>10</td>
            <td><b>BIN</b><br>2</td>
            <td><b>OCT</b><br>8</td>
            <td><b>HEX</b><br>16</td>
            <td><b><span style="color: #FF0000">R</span><span style="color: #00FF00">G</span><span style="color: #0000FF">B</span></b><br><b>HEX²</b><br>256</td>
            <td><b>ASCII</b><br>7bit<br><b>UTF-8</b><br>8,16,24,32bit</td>
            <td><b>UTF-16</b><br>16,32bit</td>
            <td><b>URI</b><br>component</td>
            <td><b>URI</b><br>complete</td>
            <td><b>unicode name</b></td>
            <td><b>unicode name Ru</b></td>
            <td><b>unicode block</b></td>
            <td><b>named<br>HTML color</b></td>
            <td><b>named<br>HTML entity</b></td>
            <td><b>№</b></td>
        </tr>
    </table>
    `
    q = 1;
    for(let i of x){
        addtr("numbertable", i, q);
        q++;
    }
}

function addtd(tr, innerHTML, style = "", copyText){
    let td = document.createElement("td");
    td.innerHTML = innerHTML;
    td.style = style;

    if(copyText === undefined) copyText = innerHTML;

    td.addEventListener('click', () => {
        navigator.clipboard.writeText(copyText).then(() => {
            alert(`Текст "${copyText}" скопирован в буфер обмена!`);
        }).catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        });
    });

    tr.appendChild(td);
}

function addtr(table, i, q){
    let num = new mynumber(i);

    let tr = document.createElement("tr");

    addtd(tr, num.unicode ? ('"' + num.unicode + '"') : "", `background-color: ${num.control ? "red" : "silver"}; font-family: 'unifont', 'unifont_jp', 'unifont_upper', 'unifont_csur'; text-align: center;`, num.unicode ? num.unicode : "" );
    addtd(tr, num.base64 ?? "");
    addtd(tr, num.namedEscapeSequence ?? "", "text-align: center;");
    // addtd(tr, num.keyboard ?? "");
    addtd(tr, num.xi10);
    addtd(tr, `<span style="color: #FF0000">${num.xi2_24.slice(0, 8)}</span><span style="color: #00FF00">${num.xi2_24.slice(8, 16)}</span><span style="color: #0000FF">${num.xi2_24.slice(16, 24)}</span>`);
    addtd(tr, num.xi8_8);
    addtd(tr, `<span style="color: #FF0000">${num.xi16_6.slice(0, 2)}</span><span style="color: #00FF00">${num.xi16_6.slice(2, 4)}</span><span style="color: #0000FF">${num.xi16_6.slice(4, 6)}</span>`);
    addtd(tr, `<span style="color: #FF0000">${num.xR}</span><span style="color: #00FF00">${num.xG}</span><span style="color: #0000FF">${num.xB}</span>`);
    addtd(tr, num.utf8 ?? "");
    addtd(tr, num.utf16 ?? "");
    addtd(tr, num.uri1 ?? "");
    addtd(tr, num.uri2 ?? "");
    addtd(tr, num.unicodeName ?? "");
    addtd(tr, num.unicodeNameRu ?? "");
    addtd(tr, num.unicodeBlock ?? "");

    let clr1 = num.HTMLcolor1 ? `<span>${num.HTMLcolor1}</span>` : "";
    let clr2 = num.HTMLcolor2 ? `, <span>${num.HTMLcolor2}</span>` : "";
    addtd(tr, `${clr1}${clr2}`, `background-color: ${num.color}; color: ${num.contrastColor};`);

    let ent1 = num.entities[0] ? `<span>&amp;${num.entities[0].slice(1)}</span>` : "";
    let ent2 = num.entities[1] ? `<span>&amp;${num.entities[1].slice(1)}</span>` : "";
    let ent3 = num.entities[2] ? `<span>&amp;${num.entities[2].slice(1)}</span>` : "";
    let ent4 = num.entities[3] ? `<span>&amp;${num.entities[3].slice(1)}</span>` : "";
    let ent5 = num.entities[4] ? `<span>&amp;${num.entities[4].slice(1)}</span>` : "";
    let ent6 = num.entities[5] ? `<span>&amp;${num.entities[5].slice(1)}</span>` : "";
    addtd(tr, `${ent1} ${ent2} ${ent3} ${ent4} ${ent5} ${ent6}`);

    addtd(tr, q);
    
    document.getElementById(table).appendChild(tr);
}


