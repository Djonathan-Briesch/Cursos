const canvas = document.querySelector("#desenho");
const contexto = canvas.getContext("2d");

let dirX = 4;
let dirY = 4;
let posX = 0;
let posY = 0;
let height = 50;
let width = 50;

let heightCanvas = 500;
let widthCanvas = 500;

let anima;

function desenha() {
  contexto.clearRect(0, 0, heightCanvas, widthCanvas);

  contexto.fillStyle = "#f00";
  contexto.fillRect(posX, posY, height, width);

  contexto.lineWidth = 3;
  contexto.stokeStyle = "#000";
  contexto.strokeRect(posX, posY, width, height);

  posX += dirX;
  posY += dirY;
  anima = requestAnimationFrame(desenha);
  if (posX + width >= heightCanvas || posX <= 0) {
    dirX *= -1;
    dirY *= -1;
  }
}

desenha();
