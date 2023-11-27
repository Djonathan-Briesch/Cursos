const data = new Date()

console.log(data);
console.log(`Dia: ${data.getDate()}`)
console.log(`Dia da semana: ${data.getDay()}`)
console.log(`Ano: ${data.getFullYear()}`)
console.log(`Hora: ${data.getHours()}`)
console.log(`Milisegundo: ${data.getMilliseconds()}`)
console.log(`Mes: ${data.getMonth()}`)

const data_S = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

console.log(data_S);