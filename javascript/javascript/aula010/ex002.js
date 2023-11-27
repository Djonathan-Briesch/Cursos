// forEach
// forEach é um função de arrays

let frutas = ['Uva','Pera','Maça','Abacaxi','Caqui','Mamão',];

frutas.forEach(function(frutas, i){ // frutas se refere ao conteudo do array e o i (indice) se refera a posição dos elementos no array
    i += 1;
    console.log( i + "  " + frutas );
})