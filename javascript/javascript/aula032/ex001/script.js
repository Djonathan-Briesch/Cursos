const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const posX = document.querySelector("#posX");
const posY = document.querySelector("#posY");
const largura = document.querySelector("#largura");
const altura = document.querySelector("#altura");

q1.addEventListener("click", (el) => {
    get(el.target)
});
q2.addEventListener("click", (el) => {
    get(el.target)
});

const get = (el) => {
  console.log(el.getBoundingClientRect());
  let domRect = el.getBoundingClientRect();

  posX.innerHTML = `posx ${domRect.x}`;
  posY.innerHTML = `posy ${domRect.y}`;
  largura.innerHTML = `Largura ${domRect.width}`;
  altura.innerHTML = `Altura ${domRect.height}`;
};
