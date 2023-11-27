import contato from "./contatos.js"

const box2 = document.querySelector("#box2")
const btn = document.querySelector("#btn")

btn.addEventListener('click', ()=>{
    const cont = {
        nome: document.querySelector("#nome").value,
        telefone: document.querySelector("#cell").value,
        email: document.querySelector("#email").value
    }
    contato.addContato(cont,box2)
})