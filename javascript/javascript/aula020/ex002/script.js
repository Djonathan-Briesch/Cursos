const numero = document.querySelector("#numero");
const btnTrueOrFalse = document.querySelector("#trueOrFalse");
const btnPromessa = document.querySelector("#btn-promessa");

let resultado = true;

btnTrueOrFalse.addEventListener("click", () => {
  if (resultado) {
    resultado = false;
    btnTrueOrFalse.innerText = "False";
  } else {
    resultado = true;
    btnTrueOrFalse.innerText = "True";
  }
});

const promessa = () => {
  let p = new Promise((aprovado, rejeitado) => {
    let tempo = 3000;

    setTimeout(() => {
      if (resultado) {
        aprovado("Deu tudo certo");
      } else {
        rejeitado("Deu tudo errado");
      }
    }, tempo);
  });
  return p;
};

btnPromessa.addEventListener("click", () => {
  numero.innerHTML = "Processando...";
  console.log(promessa());
  promessa()
    .then((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.remove("error");
      numero.classList.add("ok");
    })
    .catch((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.remove("ok");
      numero.classList.add("error");
    });
});

numero.innerHTML = "Esperando...";
