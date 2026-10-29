const DATA_WAKACJI = new Date(2027, 5, 26);
const swieta = new Date(2026, 11, 25);

function dopiszZero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}

function pokazZegar() {
    const teraz = new Date();
    const g = dopiszZero(teraz.getHours());
    const m = dopiszZero(teraz.getMinutes());
    const s = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = g + ";" + m + ";" + s;
}

function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL", { weekday: "long" });
}

function policz(dataOd, dataDo) {
    const roznicaMs = dataDo - dataOd; 
    return Math.ceil(roznicaMs / 86400000);
}

function pokazDni() {
    document.getElementById("dniSwieta").textContent = policz(new Date(), swieta);
    document.getElementById("dni").textContent = policz(new Date(), DATA_WAKACJI);
}

pokazDate();
pokazDni();
setInterval(pokazZegar, 1000);
console.log(policz(new Date(), swieta));
console.log(policz(new Date(), DATA_WAKACJI));