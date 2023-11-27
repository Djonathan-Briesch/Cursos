const paragrafoArray     = document.querySelector("#array")
const btnVerificar       = document.querySelector("#btnVerificar")
const paragrafoResultado = document.querySelector("#resultado")

const elementosArray = [21,25,19,20,16,18,22]
paragrafoArray.innerHTML = "[" + elementosArray + "]"

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementosArray.every((el,ind)=>{
        if (el<18) {
            paragrafoResultado.innerHTML = "Array não conforme na posição " + (ind + 1)
        }
        return el >= 18
    })
    if (retorno) {
        paragrafoResultado.innerHTML = "OK"
    }
    console.log(retorno);
})
