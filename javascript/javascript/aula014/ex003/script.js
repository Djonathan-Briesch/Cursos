const paragrafoArray     = document.querySelector("#array")
const btnVerificar       = document.querySelector("#btnVerificar")
const paragrafoResultado = document.querySelector("#resultado")

const elementosArray = [11,12,13,14,15,16,17,18]
paragrafoArray.innerHTML = "[" + elementosArray + "]"

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementosArray.some((el,ind)=>{
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
