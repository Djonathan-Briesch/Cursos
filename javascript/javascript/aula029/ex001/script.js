let nome = new String("Bruno")
let nome2 = new String("Bruno")
let canal = new String("CFBCursos")

console.log(nome);

console.log(nome.charAt(1))

console.log(nome.charCodeAt(0));


console.log(nome.concat(" " + canal)); // Não altera o conteudo original. Deve-se atribuir a propria variavel para tal

console.log(nome.indexOf("u")); // Primeiro
console.log(nome.lastIndexOf("r")); // Ultimo

console.log(nome.localeCompare(nome2)); // Comparar objetos String | 0 é ok | 1 A segunda é maior | -1 A primeira é maior

console.log(nome.replace("B","p")); // Substitui so o primeiro

console.log(nome.search("r")); //Pesquisa el, semelhante com indexOf

console.log(nome.slice(1,3)); // Corte indicado

let arrNome = "Carlos deide costa"
console.log(arrNome.split(" ")); // Recorte no elemento indicado | retorna um array com os elementos recortados

let parteString = arrNome.substring(0,3) // Não incluir o ultimo | < =! <= 
console.log(parteString);

let parte2 = arrNome.substr(7,5) // Pega o el e retorn x caracteres depois | (esta descontinuada)
console.log(parte2);

console.log(nome.toUpperCase()); // locale faz a msm coisa
console.log(nome.toLowerCase()); // locale faz a msm coisa

console.log(nome.valueOf()); // Valor da string

let num = 10
console.log(typeof(num));
console.log(typeof(num.toString()));

// NOVOS METODOS (ES6)

let novoNome = new String("Carlos Alberto de Nobrega")

console.log(novoNome.startsWith("Car")); // Começa com?
console.log(novoNome.endsWith("ga")); // Termina com?
console.log(novoNome.includes("de")); // Tem na String?

console.log(nome.repeat(4));

console.log(String.fromCodePoint(114)); // Retorna o caracter associado ao codigo

