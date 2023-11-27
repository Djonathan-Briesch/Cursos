const canvas = document.querySelector("#desenho");
const contexto = canvas.getContext("2d");

contexto.clearRect(0,0,500,500)

/*
  Fazer um arco
    faz um quadrado referencial
    e depois curva
*/

contexto.beginPath()
// x1 y1 x2 y2 raio // X2 Y2 => linha de referencia
contexto.moveTo(0,0)
// contexto.lineTo(100,100)
contexto.arcTo(250,250,500,0,200)
contexto.stroke()
contexto.closePath()