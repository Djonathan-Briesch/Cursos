const canvas = document.querySelector("#desenho");
const contexto = canvas.getContext("2d");

let nave = new Image()
nave.src = "cores.jpg"
nave.onload = ()=>{
  // Parametros:
  /* 
    Imagem 
    X Inicial do recorte
    Y Inicial do recorte
      Largura do recorte
      Altura do recorte
    Posição X
    Posição Y
    Largura da Imagem
    Altura da Imagem
  */
  contexto.drawImage(nave,100,100,50,50,0,0,50,50)
}