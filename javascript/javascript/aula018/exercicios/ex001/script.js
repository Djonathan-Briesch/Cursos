class Carros{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.tipo = "Normal"
    }
}
class Militar extends Carros {
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.tipo = "Militar"
    }
}


const botao = document.querySelector("#btn")
const boxResultado = document.querySelector("#resultado")

const radioNormal = document.querySelector("#normal")
const radioMilitar = document.querySelector("#militar")

const inputBlindagem = document.querySelector("#blindagem")
const inputMunicao = document.querySelector("#municao")

radioNormal.addEventListener('change',() => {
        inputBlindagem.disabled = true
        inputMunicao.disabled = true
})

radioMilitar.addEventListener('change', ()=> {
    inputBlindagem.disabled= false
    inputMunicao.disabled = false
})


botao.addEventListener('click', () => {
    const nome = document.querySelector("#nome").value
    const nPortas = document.querySelector("#portas").value

    if (radioNormal.checked || radioMilitar.checked) {
        
        const divC = document.createElement("div") // div container
        divC.classList.add("pResultado")

        const divP = document.createElement("div") // div para o paragrafo

        const p = document.createElement("p") // paragrafo com texto

        const divI = document.createElement("div") // div do icone
        divI.classList.add("boxDelete")

        const i = document.createElement("i") //icone
        i.classList.add("material-symbols-outlined")
        i.classList.add("icone")
        i.innerHTML = "delete"

        
        if (radioNormal.checked) {
            const carro = new Carros(nome,nPortas)
            p.innerHTML = `Nome: ${carro.nome}</br>Portas: ${carro.portas}</br>Tipo: ${carro.tipo}`
            
        } else if (radioMilitar.checked) {
            const blindagem = document.querySelector("#blindagem").value
            const municao = document.querySelector("#municao").value
            const carro = new Militar(nome,nPortas,blindagem,municao)
            p.innerHTML = `Nome: ${carro.nome}</br>Portas: ${carro.portas}</br>Blindagem: ${carro.blindagem}</br>Municao: ${carro.municao}</br> Tipo: ${carro.tipo}`
        }
            i.addEventListener('click', () => {
                divC.remove()
            })
            
            divC.appendChild(divP)
            divC.appendChild(divI)
            divI.appendChild(i)
            divP.appendChild(p)
            boxResultado.appendChild(divC)
    }else {
        alert("Selecione um tipo de carrro")
    }
})
