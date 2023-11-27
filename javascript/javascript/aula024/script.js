const url = document.querySelector("#url")
const btnUrl = document.querySelector("#btn_url")

btnUrl.addEventListener("click",()=>{
    // window.location="https://google.com.br"
    // window.location.replace("https://google.com.br")
    // replace substitui o assing nao
    // window.location.reload() recarregar pagina
    // window.history.forward() forward vai para a proxima pagina e back para a anterior
    // window.history.go(-2) quatas paginas caminhar
    window.location = url.value
})