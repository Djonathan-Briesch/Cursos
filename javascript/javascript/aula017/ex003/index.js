const btnAdd = document.querySelector("#btn")
const caixa = document.querySelector("#caixa")

class Pessoa {
    constructor(pNome,pIdade){
        this.nome = pNome
        this.idade = pIdade 
    }

    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }

    info(){
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

