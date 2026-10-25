const time = document.getElementById("time");

setInterval(() => {
    time.innerHTML = `
        ${String(Date.now()).slice(0, 1)}
        ${String(Date.now()).slice(1, 4)}
        ${String(Date.now()).slice(4, 7)}
        ${String(Date.now()).slice(7, 10)}
         <span style='color: Red'>${String(Date.now()).slice(10)}</span>`;
    
}, 100);