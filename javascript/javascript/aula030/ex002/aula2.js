const texto = "João é um indivíduo alegre e otimista que vive sua vida com paixão. Ele adora passar seu tempo livre explorando a natureza, praticando esportes e desfrutando de boa comida com amigos e familiares. Sua dedicação ao trabalho e seu comprometimento em ajudar os outros o tornam uma pessoa admirável em sua comunidade. João é conhecido por sua empatia e habilidade em criar conexões significativas com as pessoas ao seu redor. Seu sorriso contagiante e atitude positiva iluminam o dia de todos que têm a sorte de conhecê-lo."

// (...)(...)(...)
//  $1    $2   $3 (Pela sequencia)

const regExp1 = /João/gi

console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|indivíduo)/gi,'<b>$1</b>'));
console.log(texto.replace(/(João|indivíduo)/gi, function (input) {
    return input.toUpperCase() + '----'
}));