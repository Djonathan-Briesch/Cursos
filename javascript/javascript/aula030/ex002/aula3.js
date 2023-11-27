const texto =
  "João é um indivíduo alegre e otimista que vive sua vida com paixão. Ele adora passar seu tempo livre explorando a natureza, praticando esportes e desfrutando de boa comida com amigos e familiares. Sua dedicação ao trabalho e seu comprometimento em ajudar os outros o tornam uma pessoa admirável em sua comunidade. joão é conhecido por sua empatia e habilidade em criar conexões significativas com as pessoas ao seu redor. Seu sorriso contagiante e atitude positiva iluminam o dia de todos que têm a sorte de conhecê-lo. Joooãoooo";

  const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Marido.png',
    'Lista de compras.txt'
  ]
// Quantificadores
// * 0 ou n {0,}
// + 1 ou n {1,}
// ? 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} min max

// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi

for(const arquivo of arquivos){
    console.log(arquivo.match(regExp2));
}