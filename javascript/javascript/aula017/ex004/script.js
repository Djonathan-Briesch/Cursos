const btnAdd = document.querySelector("#btn")
const caixa = document.querySelector("#caixa")

function Pessoa(pNome,pIdade) {
    this.nome = pNome,
    this.idade = pIdade,

    this.getNome = function(){
        return this.nome
    },

    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function(nome){
        this.nome = nome
    },
    
    this.setIdade = function(idade){
        this.idade = idade
    },

    this.info = function(){
        console.log(`O seu nome é: ${this.nome} e sua idade é ${this.idade}`)
    }
}

let pessoas = []

const addPessoa = () => {
    caixa.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} e idade: ${p.getIdade()}`
        caixa.appendChild(div)
    })
}

btnAdd.addEventListener('click',(evt)=>{
    const nome = document.querySelector("#nome")
    const idade = document.querySelector("#idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})

