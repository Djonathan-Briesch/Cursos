// TEMPLATE STRINGS
const caixa = document.querySelector("#caixa")

const curso = "JavaScript"
const canal = "CFB Cursos"

const frase = `Este é o curso de ${curso} do canal ${canal}`
// Quebra de linha <br/> no html (DOM), \n no console

const carros = ["Polo","Golf","T-Cross","HRV"]

let ol = "<ol>"
carros.map((el)=>{
    ol += `<li>${el}</li>`
})
ol + `</ol>`

caixa.innerHTML = ol
