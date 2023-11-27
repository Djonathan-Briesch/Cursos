// Estruturas de repetição

console.log('Números inteiros de 0 até 5:')

for(let i = 0; i <= 5; i++){ // += 2 para aumentar de 2 em 2
    console.log(i);
}

console.log('Números inteiros de 5 até 0:')

for(let i = 5; i >= 0; i--){ // -= 2 para diminuir de 2 em 2
    console.log(i);
}

// for para arrays
let frutas = ['Uva','Pera','Maça','Abacaxi','Caqui',];

for(let i = 0; i < frutas.length; i++){ // length pega quantos elementos tem no caso 5, porem a contagem do array começa em 0 (5 elemento numerados de 0 a 4)
    console.log(`Fruta: ${frutas[i]}`);
}
