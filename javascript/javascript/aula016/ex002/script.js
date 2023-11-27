// COLEÇÃO SET (NÃO DUPLICA ELEMENTOS)
const caixa = document.querySelector("#caixa")

let colecaoSet = new Set(["Musica1","Musica boa","Musica10"])

colecaoSet.add("Musica muito legal")
colecaoSet.add("Musica1")
colecaoSet.add("Musica1")
colecaoSet.add("Musica10")

console.log(colecaoSet);

colecaoSet.delete("Musica10")

colecaoSet.forEach((el)=>{
    caixa.innerHTML += el + "<br/>"
})

for (const m of colecaoSet) {
    console.log(m);
}