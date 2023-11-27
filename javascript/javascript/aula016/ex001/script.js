// COLEÇÃO MAP
const caixa = document.querySelector("#caixa")

let colecaoMap = new Map()

colecaoMap.set("Curso","JavaScript")
colecaoMap.set(10,"CFB Cursos")
colecaoMap.set(1,1000)
colecaoMap.set("Canal",100)

colecaoMap.delete(1)

console.log(colecaoMap);

let pes = 1

if (colecaoMap.has(pes)) {
    caixa.innerHTML = "A chave existe " + colecaoMap.get(pes)
}else{
    caixa.innerHTML = "Nao encontrada"
}

caixa.innerHTML += "<br/>" + colecaoMap.size

colecaoMap.forEach((el, key)=>{
    console.log(el + " " + key);
})

console.log(colecaoMap.entries());