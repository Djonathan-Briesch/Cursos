let lutador = {
    nome: 'Charles Oliveira da Silva',
    nacionalidade: 'Brasileiro',
    idade: 33,
    peso: 70,
    altura: 1.78,
}
document.getElementById("infoLutador").innerHTML = `Nome: ${lutador.nome} <br> Nacionalidade: ${lutador.nacionalidade} <br> Idade: ${lutador.idade} Anos <br> Peso: ${lutador.idade} Kg <br> Altura: ${lutador.altura} m`;

let meses = [
    'Janeiro',
    'Feveiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]
document.querySelector('#meses').innerHTML = `${meses[0]} <br> ${meses[1]} <br> ${meses[2]} <br> ${meses[3]} <br> ${meses[4]} <br> ${meses[5]} <br> ${meses[6]} <br> ${meses[7]} <br> ${meses[8]} <br> ${meses[9]} <br> ${meses[10]} <br> ${meses[11]} <br>`;


let jogos = {
    jogo: 'League of Legends',
    desenvolvedor: 'Riot Games',
    ano: 2009,
}
document.querySelector('#jogo').innerHTML = `Título: ${jogos.jogo} <br> Desenvolvedora: ${jogos.desenvolvedor} <br> Ano de Lançamento ${jogos.ano}`