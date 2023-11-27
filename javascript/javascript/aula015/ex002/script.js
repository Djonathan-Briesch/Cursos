// COLEÇÕOES


let cores = ["Azul","Verde","Vermelho",["claro","escuro","medio"]]
let cursos = ["HTML","CSS","JavaScript", cores]
const box = document.querySelector("#caixa")

cursos[0] = 2023

console.log(cursos[0]);

cursos.push("C++","Python")//ADICIONA NO FINAL
cursos.pop()//REMOVE O ULTIMO

cursos.unshift("JAVA") // ADD NO INICIO
cursos.shift()//REMOVE NO INICIO

cursos.map((el)=> {
    let div = document.createElement("div")
    div.className = "curso"
    div.innerHTML = el
    box.appendChild(div)
})

console.log(cursos[3][3][2]);

// CONCEITO DE MATRIZES ADICIONAR UM ARRAY DENTRO DE OUTRO