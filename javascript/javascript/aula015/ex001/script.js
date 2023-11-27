// ITERADORES

const valores = [10,8,9]
const itValores = valores[Symbol.iterator]()

const texto = "Youtube"
const itTexto = texto[Symbol.iterator]()

console.log(valores);

console.log(itValores.next());
console.log(itValores.next());
console.log(itValores.next());
console.log(itValores.next()); // done = true significa que chegou ao fim


console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());