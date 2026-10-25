function render(x, contenerID="contener"){

    switch (renderMethod){
        case "select1":
            renderTable(x, contenerID);
            break;
        case "select2":
            renderLine(x, contenerID);
            break;
        case "select3":
            break;
    }
}