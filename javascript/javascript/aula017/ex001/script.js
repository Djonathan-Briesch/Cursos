// Objetos

class Pessoa {
    constructor(pNome){
        this.nome = pNome 
    }
}

let p1 = new Pessoa(10)
let p2 = new Pessoa("Asdervardson")
let p3 = new Pessoa("Benasclartei")

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);