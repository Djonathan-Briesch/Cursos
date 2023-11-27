// ^  -> Começa com | [^] -> Negação
// $  -> Termina com
// m - multiline (Por linha) // Nao ignora espacos no inicio

const cpfs = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`
const cpf = '254.224.877-45'

const regExCPF = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpf.match(regExCPF));
console.log(cpfs.match(regExCPF));