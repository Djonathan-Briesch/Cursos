const nome = Symbol("Nome")
const numero = Symbol("numero")
const cor = Symbol("cor")

const jogador = {
    [nome]: "j1",
    [numero]: 10,
    [cor]: "Amarelo"
}

for (const el in jogador) {
    console.log(el);
}


console.log(nome.description);
console.log(jogador.nome);

console.log(jogador[nome]);
console.log(jogador[numero]);
console.log(jogador[cor]);