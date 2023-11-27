const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "Javascript",
    aulas: {
        aula01: "Introdução",
        aula02: "Variaveis",
        aula03: "Condicional",
    }

}

const string = '{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicional"}}'

const strJson = JSON.stringify(pessoa)//Objeto para string JSON
const objJson = JSON.parse(strJson)//String para objeto


console.log(pessoa);
console.log(strJson);
console.log(objJson);