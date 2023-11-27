const canvas = document.querySelector("#desenho");
const contexto = canvas.getContext("2d");

let sprite = new Image()
sprite.src = "sprite.jpg"
let posX = 0
let limagem = 0
let tamSprite
sprite.onload = ()=>{
  limagem = sprite.width  
  tamSprite = limagem/3
  posX = tamSprite*1
  contexto.drawImage(sprite,posX,0,tamSprite,500,0,0,300,500)
}
