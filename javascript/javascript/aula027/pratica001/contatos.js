import { contatos } from "./bancoContatos.js";

let contato = {
    getContatos: function () {
        return contatos
    },
    getContato: function (i) {
        return contatos[i]
    },
    addContato: function (novoContato,destinoDOM) {
        const div = document.createElement("div")
        div.setAttribute("class","contato")
        const pNome = document.createElement("p")
        pNome.innerHTML = novoContato.nome
        const pTelefone = document.createElement("p")
        pTelefone.innerHTML = novoContato.telefone
        const pEmail = document.createElement("p")
        pEmail.innerHTML = novoContato.email

        div.appendChild(pNome)
        div.appendChild(pTelefone)
        div.appendChild(pEmail)
        
        destinoDOM.appendChild(div)
    }
}

export default contato