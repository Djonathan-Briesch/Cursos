const paragrafoArray     = document.querySelector("#array")
const inputPesquisar     = document.querySelector("#txt-pesquisar")
const btnPesquisar       = document.querySelector("#btnPesquisar")
const paragrafoResultado = document.querySelector("#resultado")

const elementosArray = ["HTML", "CSS", "JavaScript", "ReacJS"]
paragrafoArray.innerHTML = "[" + elementosArray + "]"

btnPesquisar.addEventListener('click', (evt) => {
    paragrafoResultado.innerHTML = "Valor não encontrado"
    const retorno = elementosArray.find((el,ind)=>{
        if (el.toLowerCase() == inputPesquisar.value.toLowerCase()) {
            paragrafoResultado.innerHTML = "Valor: " + el + " Na posição: " + (ind + 1)
        }
    })
    console.log(retorno);
})
