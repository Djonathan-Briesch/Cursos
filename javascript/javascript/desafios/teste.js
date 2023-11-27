let palavraCorreta = "banana";
let tentativas = 0;
let acertou = false;
let caracteres = "abcdefghijklmnopqrstuvwxyz";

while (!acertou) {
  let palavraTeste = "";
  tentativas++;

  for (let i = 0; i < palavraCorreta.length; i++) {
    let caractereAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    palavraTeste += caractereAleatorio;
  }

  if (palavraTeste === palavraCorreta) {
    acertou = true;
    console.log("O código adivinhou a palavra correta em " + tentativas + " tentativas.");
  } else {
    console.log("Tentativa " + tentativas + ": Palavra testada: " + palavraTeste);
  }
}
