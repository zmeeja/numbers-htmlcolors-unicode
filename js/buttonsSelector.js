let renderMethod = "select2";

document.getElementById("select2").style.backgroundColor = "yellow";

function selector(x){
    document.getElementById("select1").style.backgroundColor = "revert";
    document.getElementById("select2").style.backgroundColor = "revert";
    document.getElementById("select3").style.backgroundColor = "revert";
    x.style.backgroundColor = "yellow";

    renderMethod = x.id;

    console.log(renderMethod);
}

let searchType = "select21";

document.getElementById("select21").style.backgroundColor = "yellow";

function selector2(x){
    document.getElementById("textInput").value = "";

    document.getElementById("select21").style.backgroundColor = "revert";
    document.getElementById("select22").style.backgroundColor = "revert";
    document.getElementById("select23").style.backgroundColor = "revert";
    document.getElementById("select24").style.backgroundColor = "revert";
    document.getElementById("select25").style.backgroundColor = "revert";
    document.getElementById("select26").style.backgroundColor = "revert";
    document.getElementById("select27").style.backgroundColor = "revert";
    document.getElementById("select28").style.backgroundColor = "revert";
    document.getElementById("select29").style.backgroundColor = "revert";
    document.getElementById("select30").style.backgroundColor = "revert";
    x.style.backgroundColor = "yellow";

    searchType = x.id;

    console.log(searchType);
}