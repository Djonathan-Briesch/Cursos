
const olhos = [...document.querySelectorAll(".olho")]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener('mousemove',(evt)=>{
    posx_mouse = evt.clientX
    posy_mouse = evt.clientY

    const rot = (Math.atan2(posy_mouse - window.innerHeight / 2, posx_mouse - window.innerWidth / 2) * 10) / Math.PI;

console.log(rot);
    olhos.forEach((o)=>{
        o.style.transform = "tranlate("+rot+"px)"
    })
})

