// regex101.com -> site para testar as expressões
const texto = `
Um texto que tem palavras acentuadas e quebras de linhas.
Antenção, este é um texto para capturar todas as palavras.
Mesmo que não forem match de \w
Vamos ver se seremos bem sucedidos
`
console.log(texto);

const regExp = /[\wÀ-ú]+/gm

console.log(texto.match(regExp));