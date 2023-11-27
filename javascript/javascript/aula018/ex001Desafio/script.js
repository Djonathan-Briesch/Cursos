const botao = document.querySelector("#btn")
const caixa = document.querySelector("#caixa")

const Pessoa = {
    nome: '',
    idade: '',
    getNome: function() {
        return this.nome
    },

    getIdade: function() {
        return this.idade
    },

    setNome: function(nome) {
        this.nome = nome
    },

    setIdade: function(idade) {
        this.idade = idade
    }
}

botao.addEventListener('click',()=>{
    const nomeInput = document.querySelector("#nome").value
    const idadeInput = document.querySelector("#idade").value
    
    if (nomeInput !== "" && idadeInput !== "") {
        Pessoa.setNome(nomeInput)
        Pessoa.setIdade(idadeInput)
        
        const div = document.createElement('div')
        div.innerHTML = `Nome: ${Pessoa.getNome()} Idade: ${Pessoa.getIdade()}`
        caixa.appendChild(div)
    } else {
        alert("Digite algo")
    }
})

