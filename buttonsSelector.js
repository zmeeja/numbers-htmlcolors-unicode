let renderMethod = "select1";

document.getElementById("select1").style.backgroundColor = "yellow";

function selector(x){
    document.getElementById("select1").style.backgroundColor = "revert";
    document.getElementById("select2").style.backgroundColor = "revert";
    document.getElementById("select3").style.backgroundColor = "revert";
    x.style.backgroundColor = "yellow";

    renderMethod = x.id;

    console.log(renderMethod);
}