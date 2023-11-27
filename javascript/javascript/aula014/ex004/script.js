const paragrafoArray     = document.querySelector("#array")
const btnReduzir       = document.querySelector("#btnReduzir")
const paragrafoResultado = document.querySelector("#resultado")

const elementosArray = [1,2,3,4,5]
let ant = []
let atu = []
paragrafoArray.innerHTML = "[" + elementosArray + "]"

btnReduzir.addEventListener('click', (evt) => { // O anterior e o retorno da operacao reduce
    paragrafoResultado.innerHTML = elementosArray.reduce((anterior,atual,indice)=>{
        ant.push(anterior)
        atu.push(atual)
            return atual + anterior
    })
    paragrafoResultado.innerHTML += "<br/>" + ant
    paragrafoResultado.innerHTML += "<br/>" + atu
})
