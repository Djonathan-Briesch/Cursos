const btnSoma = document.querySelector("#soma")
const btnSubtracao = document.querySelector("#menos")
const btnMultiplicacao = document.querySelector("#mult")
const btnDivsao = document.querySelector("#div")



const resultado = document.querySelector("#res")


let arrayFuncoes = [
    ()=>{
        const val = [document.querySelector("#v1").value, document.querySelector("#v2").value]
        resultado.value = Number(val[0]) + Number(val[1])
        
    },
    ()=>{
        const val = [document.querySelector("#v1").value, document.querySelector("#v2").value]
        resultado.value = Number(val[0]) - Number(val[1])
        
    },
    ()=>{
        const val = [document.querySelector("#v1").value, document.querySelector("#v2").value]
        resultado.value = Number(val[0]) * Number(val[1])
        
    },
    ()=>{
        const val = [document.querySelector("#v1").value, document.querySelector("#v2").value]
        resultado.value = Number(val[0]) / Number(val[1])
    }

]

btnSoma.addEventListener('click', arrayFuncoes[0]);
btnSubtracao.addEventListener('click', arrayFuncoes[1]);
btnMultiplicacao.addEventListener('click', arrayFuncoes[2]);
btnDivsao.addEventListener('click', arrayFuncoes[3]);



