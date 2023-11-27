const caixa1 = document.querySelector("#caixa1");


const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = el
    novoElemento.setAttribute("id","c" + (chave + 1))
    novoElemento.setAttribute("class","curso c1")

    caixa1.appendChild(novoElemento)

    const btn_lixo = document.createElement("img");
    btn_lixo.setAttribute("src", "./lixeira-de-reciclagem.png")
    btn_lixo.setAttribute("class", "btn-lixo")
    novoElemento.appendChild(btn_lixo)

    btn_lixo.addEventListener('click', (evt) => {
        console.log(evt.target.parentNode);
        caixa1.removeChild(evt.target.parentNode);
    })
})


