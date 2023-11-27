const canvas = document.querySelector("#desenho")
const contexto = canvas.getContext('2d')

let posX = 50
let posY = 50


contexto.moveTo(posX,posY)
//               x   y
contexto.lineTo(200,200)
contexto.lineTo(400,400)
contexto.lineTo(400,20)
contexto.lineTo(50,400)

contexto.moveTo(0,250)
contexto.lineTo(400,200)
contexto.stroke()