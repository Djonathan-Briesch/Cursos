class CarroPadrao {
    constructor(){
        if (this.constructor == CarroPadrao) {
            throw new TypeError("Esta classe nao pode ser instanciada")
        }
        if (this.ligar == undefined) {
            throw new TypeError("Precisa usar o metodo ligar")
        }


        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao{
    constructor(){
        this.nome = "Carro"
    }

    ligar(){

    }
}

