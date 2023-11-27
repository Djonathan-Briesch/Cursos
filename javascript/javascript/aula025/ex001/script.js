const btnA = document.querySelector("#btn-alert")
const btnC = document.querySelector("#btn-confirm")
const btnP = document.querySelector("#btn-prompt")

btnA.addEventListener('click', ()=>{
    alert("Alerta")
})

btnC.addEventListener('click', ()=>{
    const ret = confirm("Confirm")
    console.log(ret);
})

btnP.addEventListener('click', ()=>{
    const rep = prompt("Promp")
    console.log(rep);
})