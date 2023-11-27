const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btnEnviar = document.querySelector("#btn-enviar");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const cursos = evt.target;
        cursos.classList.toggle("selecionado");
    })
})

btnEnviar.addEventListener('click',()=>{
    const cursosSeleconados = [...document.querySelectorAll(".selecionado")];
    cursosSeleconados.map((el)=>{
        if (el.parentNode == caixa1) {
            caixa2.appendChild(el);
        } else if(el.parentNode == caixa2){
            caixa1.appendChild(el);
        }
        el.classList.remove('selecionado');
        
    })
})
