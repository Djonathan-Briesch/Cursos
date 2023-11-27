let nome = new String("Carloos Alberto de Nobrega c")
console.log(nome);

console.log(nome.search(/alberto/i));

console.log(nome.match(/O/ig));

console.log(nome.replace(/DE/i, "CE"));
console.log(nome.replace(/o/i, "O"));

console.log("-----------------------------------------------");

console.log(nome.match(/[or]/ig));

let email =new String( "carlos1243@email.com.br 123")

console.log(email.match(/[c-s|0-9]/ig));

// Meta carcater
console.log(email.match(/\d/ig)); // numeros
console.log(email.match(/\s/ig)); // espacos
console.log(email.match(/\bc/ig)); // DWORD

// quantificadores
let numeros = "1,10,100,1000"

console.log(numeros.match(/10+/ig)); // retorna por palavras e nao el separado
console.log(numeros.match(/10*/ig)); // o conjunto todo (10) ou o primeiro (1)
console.log(numeros.match(/10?/ig)); // somente o que encontrou