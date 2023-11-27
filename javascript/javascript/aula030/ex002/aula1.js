// g - global (Encontra todas as ocorrências)
// i - insensitive (Não diferencia maiuscula e minusculas)
// text() testar exprecao (True ou false)
// exec() retorna a um "objeto"
// () Grupos
// | ou
const regExp1 = /João/gi

const texto = "João é um indivíduo alegre e otimista que vive sua vida com paixão. Ele adora passar seu tempo livre explorando a natureza, praticando esportes e desfrutando de boa comida com amigos e familiares. Sua dedicação ao trabalho e seu comprometimento em ajudar os outros o tornam uma pessoa admirável em sua comunidade. João é conhecido por sua empatia e habilidade em criar conexões significativas com as pessoas ao seu redor. Seu sorriso contagiante e atitude positiva iluminam o dia de todos que têm a sorte de conhecê-lo."

console.log(regExp1.exec(texto))