
const DATA_WAKACJI = new Date(2027, 5, 26);
const godzina = new Date().getHours();
document.getElementById("powitanie")
.textContent = powitanie(godzina);

function dopiszZero(x) {
    return x < 10 ? "0" + x : String(x);
}

function pokazZegar() {
    const teraz = new Date();

    const g = dopiszZero(teraz.getHours());
    const m = dopiszZero(teraz.getMinutes());
    const s = dopiszZero(teraz.getSeconds());

    document.getElementById("zegar").textContent =
        `${g}:${m}:${s}`;
}

function pokazDate() {
    const teraz = new Date();

    document.getElementById("data").textContent =
        teraz.toLocaleDateString("pl-PL");

    document.getElementById("dzien").textContent =
        teraz.toLocaleDateString("pl-PL", {
            weekday: "long"
        });
}

function policzDniDoWakacji() {
    const dzisiaj = new Date();
    dzisiaj.setHours(0, 0, 0, 0);

    const wakacje = new Date(DATA_WAKACJI);
    wakacje.setHours(0, 0, 0, 0);

    const roznicaMs = wakacje - dzisiaj;
    const dni = Math.ceil(roznicaMs / 86400000);

    document.getElementById("dni").textContent =
        Math.max(0, dni);
}

function aktualizuj() {
    pokazDate();
    pokazZegar();
    policzDniDoWakacji();
}

function powitanie(godzina){
    if(godzina >= 18 || godzina < 5){
        return "Dobry Wieczór!";
    }
    return "Dzień Dobry";
}



aktualizuj();
setInterval(aktualizuj, 1000);
