// Estrutura condicionais
let notaFinal1 = 2;
let notaFinal2 = 5;
let notaFinal3 = 8;
let media = 7;

if(notaFinal2 >= media) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// IF Ternario
notaFinal3 >= media ? console.log('Aprovado') : console.log('Reprovado');

// If Encadeado ou Aninhado
if(notaFinal2 >= 7){
    console.log('Aprovado')
} else if(notaFinal2 < 3) {
    console.log('Reprovado')
} else {
    console.log('Recuperação')
}