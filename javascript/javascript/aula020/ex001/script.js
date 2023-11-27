const numero = document.querySelector("#numero");

let promise = new Promise((aprovado, rejeitado) => {
  let resultado = true;
  let tempo = 3000;

  setTimeout(() => {
    if (resultado) {
      aprovado("Deu tudo certo");
    } else {
        rejeitado("Deu tudo errado");
    }
  }, tempo);
});

promise.then((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("error");
  numero.classList.add("ok");
});
promise.catch((retorno) => {
  numero.innerHTML = retorno;
  numero.classList.remove("ok");
  numero.classList.add("error");
});

numero.innerHTML = "Processando...";
