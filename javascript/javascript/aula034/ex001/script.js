const pLong = document.querySelector("#long");
const pLati = document.querySelector("#lati");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocation);
} else {
    console.log("Não está ativado");
}

function mostrarLocalizacao(position) {
    console.log(position);
    pLong.innerHTML = position.coords.longitude
    pLong.innerHTML = position.coords.latitude
}

function erroLocation() {
    console.log("Não está ativo");
}
