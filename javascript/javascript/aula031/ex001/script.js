const carro = document.querySelector("#carro");
const btnEsquerda = document.querySelector("#btn-esquerda");
const btnDireita = document.querySelector("#btn-direita");

let incremento = 1;
let posicao = 0;
let intervalo;

btnDireita.addEventListener("click", () => {
    intervalo = setInterval(() => {
        let novaPosicao = (posicao += incremento);
        carro.style.transform = `translateX(${novaPosicao}px)`;
        if (novaPosicao >= (window.innerWidth-99)) {
            clearInterval(intervalo);
        }
    }, 1);
});

btnEsquerda.addEventListener("click", () => {
    intervalo = setInterval(() => {
        let novaPosicao = (posicao -= incremento);
        carro.style.transform = `translateX(${novaPosicao}px)`;
        if (novaPosicao <= 0) {
            clearInterval(intervalo);
        }
    }, 1);
});
