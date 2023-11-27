const idades = [15,21,40,30,55,11]

// const filtroMaior18 = (valor,posicao,array) => {

const maior = idades.filter((valor) => {
    if (valor >= 18) {
        return valor
    } 
}
)
const menor = idades.filter((valor) => {
    if (valor < 18) {
        return valor
    }
})

console.log(idades);
console.log(maior);
console.log(menor);