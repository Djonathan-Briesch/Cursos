const canvas = document.querySelector("#desenho")
const contexto = canvas.getContext('2d')


// Parametros:
// posiçãoX posiçãoY raio anguloInicial anguloFinal sentido 
// Sentido: horario = true anti-Horario = false
// angulo em radiandos

contexto.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,true)
contexto.fill()

// comecar outro quando estao no mesmo lugar
contexto.beginPath()

contexto.fillStyle = '#f00'
contexto.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,false)
contexto.fill()