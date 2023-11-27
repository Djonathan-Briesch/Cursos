const canvas = document.querySelector("#desenho");
const contexto = canvas.getContext("2d");

for (let i = 0; i < 10; i++) {
  contexto.beginPath();
  contexto.arc(
    Math.random()*100,
    Math.random()*100,
    100,
    (Math.PI / 180) * 0,
    (Math.PI / 180) * 360,
    false
  );
  contexto.fill();
}
