// const c1 = document.querySelectorAll("#c1");

// // const msg = () => {
// //     alert('Alerta');
// // }

// c1.addEventListener("click", (event) => {
//     //console.log(event.target);
//     const el = event.target;
    
//     el.classList.add("destaque")
//     el.classList.remove("c1")
//     //alert('Alerta');
// })    

const cursos = [...document.querySelectorAll(".cursos")];

cursos.map((el) => {
    el.addEventListener('click', () => {
        el.classList.add("destaque")
        
    })
})