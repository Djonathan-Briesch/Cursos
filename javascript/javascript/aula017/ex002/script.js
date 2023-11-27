// Objetos

class Carro {
    constructor(pNome,pTipo){
        this.nome = pNome
        if (pTipo == 1) {
            this.tipo = "Esportivo"
            this.velMax = 300
        } else if (pTipo == 2) {
            this.tipo = "Utilitario"   
            this.velMax = 100 
        } else if (pTipo == 3) {
            this.tipo = "Passeio"
            this.velMax = 160
        } else {
            this.tipo = "Militar"
            this.velMax = 180
        }
    }

    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velMax
    }

    getInfo(){
        return [this.nome,this.tipo,this.velMax]
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVMax(velMax){
        this.velMax = velMax
    }

    insfo(){
        console.log("--------------------");
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.velMax}`);
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super luxo",2)
let c3 = new Carro("Bombadão",4)
let c4 = new Carro("Carrego Tudo",3)

c1.setNome("BMW")
c1.setTipo("ECO")
c1.setVMax(700)

console.log(c1.getInfo());

