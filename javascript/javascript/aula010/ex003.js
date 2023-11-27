// while (Enquanto faça)
// Se a condição for falsa ele não executa nada
let cont = 1;

while(cont <= 5){
    console.log(cont);
    cont++;
}
console.log('------------------------------------------------')

let frutas = ['Uva','Pera','Maça','Abacaxi','Caqui',];

let cont2 = 0;

while(cont2 < frutas.length){
    console.log((cont2 + 1) + " " + frutas[cont2]);
    cont2++
}

console.log('---------------------------------------------------')
// DO WHILE (faça enquanto)
// Ele faz pelo menos 1 ação e depois verifica a condição

let contador = 0;

do {
    console.log((contador + 1) + " " + frutas[contador]);
    contador++
} while(contador < frutas.length);