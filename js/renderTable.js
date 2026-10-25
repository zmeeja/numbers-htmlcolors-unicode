function renderTable(x = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], contenerID="contener"){
    document.getElementById(contenerID).innerHTML = "";
    document.getElementById(contenerID).innerHTML ="<table id='numbertable'></table>";

    addtrtd(5, 22);
    document.getElementById("td_4_1").innerHTML = "total";
    document.getElementById("td_5_1").innerHTML = "<b>Unicode<br>symbol</b>";

    document.getElementById("td_3_2").innerHTML = "bytes<br>↓<br>text";
    document.getElementById("td_3_2").style = "color: blue;";
    document.getElementById("td_4_2").innerHTML = "64";
    document.getElementById("td_5_2").innerHTML = "<b>base64</b><br>6bit";

    document.getElementById("td_1_3").innerHTML = "<b>OCT:</b><br>\\0XX";
    document.getElementById("td_2_3").innerHTML = "<b>HEX:</b><br>\\xXX<br>\\uXXXX<br>\\u{XXXXX}";
    document.getElementById("td_3_3").innerHTML = "text<br>↓<br>text";
    document.getElementById("td_3_3").style = "color: lime;";
    document.getElementById("td_5_3").innerHTML = "<b>named<br>escape<br>sequence</b>";

    document.getElementById("td_5_4").innerHTML = "<b>DEC</b><br>10";

    document.getElementById("td_5_5").innerHTML = "<b>BIN</b><br>2";

    document.getElementById("td_5_6").innerHTML = "<b>OCT</b><br>8";

    document.getElementById("td_3_7").innerHTML = "color<br>↓<br>text<br>(hex code)";
    document.getElementById("td_3_7").style = "color: Fuchsia;";
    document.getElementById("td_4_7").innerHTML = "16 777 216";
    document.getElementById("td_5_7").innerHTML = "<b>HEX</b><br>16";

    document.getElementById("td_3_8").innerHTML = "color<br>↓<br>text<br>(3 dec numbers)";
    document.getElementById("td_3_8").style = "color: Fuchsia;";
    document.getElementById("td_4_8").innerHTML = "16 777 216";
    document.getElementById("td_5_8").innerHTML = "<b><span style='color: #FF0000'>R</span><span style='color: #00FF00'>G</span><span style='color: #0000FF'>B</span></b><br><b>HEX²</b><br>256";

    document.getElementById("td_3_9").innerHTML = "text<br>↓<br>bytes";
    document.getElementById("td_3_9").style = "color: red;";
    document.getElementById("td_4_9").innerHTML = "1 114 112";
    document.getElementById("td_5_9").innerHTML = "<b>ASCII</b><br>7bit<br><b>UTF-8</b><br>8,16,24,32bit";

    document.getElementById("td_3_10").innerHTML = "text<br>↓<br>bytes";
    document.getElementById("td_3_10").style = "color: red;";
    document.getElementById("td_4_10").innerHTML = "1 114 112";
    document.getElementById("td_5_10").innerHTML = "<b>UTF-16</b><br>16,32bit";

    document.getElementById("td_3_11").innerHTML = "text<br>↓<br>text";
    document.getElementById("td_3_11").style = "color: lime;";
    document.getElementById("td_4_11").innerHTML = "1 114 112";
    document.getElementById("td_5_11").innerHTML = "<b>URI</b><br>component";

    document.getElementById("td_3_12").innerHTML = "text<br>↓<br>text";
    document.getElementById("td_3_12").style = "color: lime;";
    document.getElementById("td_4_12").innerHTML = "1 114 112";
    document.getElementById("td_5_12").innerHTML = "<b>URI</b><br>complete";

    document.getElementById("td_5_13").innerHTML = "<b>unicode name</b>";

    document.getElementById("td_5_14").innerHTML = "<b>unicode name Ru</b>";

    document.getElementById("td_5_15").innerHTML = "<b>unicode block</b>";

    document.getElementById("td_1_16").innerHTML = "<b>HEX²:</b><br>rgb(X X X)<br>rgb(X X X / α)<br>rgb(X, X, X)<br>rgba(X, X, X, α)";
    document.getElementById("td_2_16").innerHTML = "<b>HEX:</b><br>#XXXXXX";
    document.getElementById("td_3_16").innerHTML = "color<br>↓<br>text";
    document.getElementById("td_3_16").style = "color: Fuchsia;";
    document.getElementById("td_4_16").innerHTML = "139";
    document.getElementById("td_5_16").innerHTML = "<b>named<br>HTML color</b>";

    document.getElementById("td_1_17").innerHTML = "<b>DEC:</b><br>&#X;";
    document.getElementById("td_2_17").innerHTML = "<b>HEX:</b><br>&#xX;";
    document.getElementById("td_3_17").innerHTML = "text<br>↓<br>text";
    document.getElementById("td_3_17").style = "color: lime;";
    document.getElementById("td_5_17").innerHTML = "<b>named<br>HTML entity</b>";

    document.getElementById("td_5_18").innerHTML = "CP437";
    document.getElementById("td_5_19").innerHTML = "CP866";
    document.getElementById("td_5_20").innerHTML = "CP1251";
    document.getElementById("td_5_21").innerHTML = "CP1252";

    document.getElementById("td_5_22").innerHTML = "<b>№</b>";



    document.getElementById("tr_3").style.textAlign = "center";
    document.getElementById("tr_4").style.textAlign = "center";
    document.getElementById("tr_5").style.backgroundColor = "gold";
    document.getElementById("tr_5").style.textAlign = "center";

    q = 1;
    for(let i of x){
        addtr("numbertable", i, q);
        q++;
    }
}



function addtrtd(row, col){
    const table = document.getElementById("numbertable");

    for(let i = 0; i < row; i++){
        const tr = document.createElement("tr");
        tr.id = `tr_${i + 1}`;
        table.appendChild(tr);

        for(let j = 0; j < col; j++){
            const td = document.createElement("td");
            td.id = `td_${i + 1}_${j + 1}`;
            tr.appendChild(td);
        }
    }
}

function addtr(table, i, q){
    const num = new mynumber(i);

    const tr = document.createElement("tr");
    tr.style.height = "1.5em";
    tr.style.lineHeight = "1.5em";

        const td1 = document.createElement("td");
        td1.innerHTML = num.unicode;
        td1.style = `background-color: ${num.control ? "red" : "silver"}; text-align: center;`;
        td1.addEventListener('click', () => { 
            navigator.clipboard.writeText(num.unicode).then(() => { alert(`Текст "${num.unicode}" скопирован в буфер обмена!`); }).catch(err => { console.error('Не удалось скопировать текст:', err); }); 
        });
        td1.addEventListener('mouseenter', () => { td1.innerHTML = `"${num.unicode}"`; });
        td1.addEventListener('mouseleave', () => { td1.innerHTML = `${num.unicode}`; });
        tr.appendChild(td1);

        const td2 = document.createElement("td");
        td2.innerHTML = `<span onclick="copyText(this)">${num.base64}</span>`;
        td2.style.textAlign = "center";
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.innerHTML = `<span onclick="copyText(this)">${num.namedEscapeSequence}</span>`;
        td3.style.textAlign = "center";
        tr.appendChild(td3);
    
        const td4 = document.createElement("td");
        td4.innerHTML = `<span onclick="copyText(this)">${num.xi10}</span>`;
        tr.appendChild(td4);
    
        const td5 = document.createElement("td");
        td5.innerHTML = `<span onclick="copyText(this)"><span style="color: #FF0000">${num.xi2_24.slice(0, 8)}</span><span style="color: #00FF00">${num.xi2_24.slice(8, 16)}</span><span style="color: #0000FF">${num.xi2_24.slice(16, 24)}</span></span>`;
        tr.appendChild(td5);

        const td6 = document.createElement("td");
        td6.innerHTML = `<span onclick="copyText(this)">${num.xi8_8}</span>`;
        tr.appendChild(td6);

        const td7 = document.createElement("td");
        td7.innerHTML = `<span onclick="copyText(this)"><span style="color: #FF0000">${num.xi16_6.slice(0, 2)}</span><span style="color: #00FF00">${num.xi16_6.slice(2, 4)}</span><span style="color: #0000FF">${num.xi16_6.slice(4, 6)}</span></span>`;
        tr.appendChild(td7);

        const td8 = document.createElement("td");
        td8.innerHTML = `<span onclick="copyText(this)"><span style="color: #FF0000">${num.xR}</span><span style="color: #00FF00">${num.xG}</span><span style="color: #0000FF">${num.xB}</span></span>`;
        tr.appendChild(td8);

        const td9 = document.createElement("td");
        td9.innerHTML = `<span onclick="copyText(this)">${num.utf8}</span>`;
        tr.appendChild(td9);

        const td10 = document.createElement("td");
        td10.innerHTML = `<span onclick="copyText(this)">${num.utf16}</span>`;
        tr.appendChild(td10);

        const td11 = document.createElement("td");
        td11.innerHTML = `<span onclick="copyText(this)">${num.uri1}</span>`;
        tr.appendChild(td11);

        const td12 = document.createElement("td");
        td12.innerHTML = `<span onclick="copyText(this)">${num.uri2}</span>`;
        tr.appendChild(td12);
    
        const td13 = document.createElement("td");
        td13.innerHTML = `<span onclick="copyText(this)">${num.unicodeName}</span>`;
        tr.appendChild(td13);
    
        const td14 = document.createElement("td");
        td14.innerHTML = `<span onclick="copyText(this)">${num.unicodeNameRu}</span>`;
        tr.appendChild(td14);
    
        const td15 = document.createElement("td");
        td15.innerHTML = `<span onclick="copyText(this)">${num.unicodeBlock}</span>`;
        tr.appendChild(td15);
    
        let clr1 = `<span onclick="copyText(this)">${num.HTMLcolor1}</span>`;
        let clr2 = num.HTMLcolor2 ? `, <span onclick="copyText(this)">${num.HTMLcolor2}</span>` : "";
        const td16 = document.createElement("td");
        td16.innerHTML = `${clr1}${clr2}`;
        td16.style = `background-color: ${num.color}; color: ${num.contrastColor};`;
        tr.appendChild(td16);

        let ent1 = num.entities[0] ? `<span onclick="copyText(this)">&amp;${num.entities[0].slice(1)}</span>` : "";
        let ent2 = num.entities[1] ? `<span onclick="copyText(this)">&amp;${num.entities[1].slice(1)}</span>` : "";
        let ent3 = num.entities[2] ? `<span onclick="copyText(this)">&amp;${num.entities[2].slice(1)}</span>` : "";
        let ent4 = num.entities[3] ? `<span onclick="copyText(this)">&amp;${num.entities[3].slice(1)}</span>` : "";
        let ent5 = num.entities[4] ? `<span onclick="copyText(this)">&amp;${num.entities[4].slice(1)}</span>` : "";
        let ent6 = num.entities[5] ? `<span onclick="copyText(this)">&amp;${num.entities[5].slice(1)}</span>` : "";
        const td17 = document.createElement("td");
        td17.innerHTML = `${ent1} ${ent2} ${ent3} ${ent4} ${ent5} ${ent6}`;
        tr.appendChild(td17);

        const td19 = document.createElement("td");
        td19.innerHTML = `<span onclick="copyText(this)">${num.CP437}</span>`;
        td19.style.textAlign = "center";
        tr.appendChild(td19);

        const td20 = document.createElement("td");
        td20.innerHTML = `<span onclick="copyText(this)">${num.CP866}</span>`;
        td20.style.textAlign = "center";
        tr.appendChild(td20);

        const td21 = document.createElement("td");
        td21.innerHTML = `<span onclick="copyText(this)">${num.CP1251}</span>`;
        td21.style.textAlign = "center";
        tr.appendChild(td21);
        
        const td22 = document.createElement("td");
        td22.innerHTML = `<span onclick="copyText(this)">${num.CP1252}</span>`;
        td22.style.textAlign = "center";
        tr.appendChild(td22);

        const td18 = document.createElement("td");
        td18.innerHTML = `${q}`;
        tr.appendChild(td18);

    document.getElementById(table).appendChild(tr);
}
