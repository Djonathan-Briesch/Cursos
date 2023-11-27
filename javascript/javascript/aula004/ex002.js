// Calculos com objetos
// IMC
let pessoa = {
    nome    : 'Carlos',
    idade   : 25,
    peso    : 76.4,
    altura  : 1.75,
}

let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
console.log(`O Imc de ${pessoa.nome} é de ${imc.toFixed(2)}`);