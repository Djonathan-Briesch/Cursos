class Carro{
    constructor(tipo,estagioTurno){
        this.turbo = new Turbo(estagioTurno)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "Normal"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "Esportivo"
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = "Super esportivo"
        }
        this.velMax += this.turbo.potencia
    }

    info(){
        console.log("----------------------");
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log("----------------------");
    }
}

class Turbo{
    constructor(e){
        if (e == 0) {
            this.potencia = 0
        } else if (e == 1) {
            this.potencia = 50
        } else if (e == 2) {
            this.potencia = 75
        } else if(e == 3) {
            this.potencia = 100
        }
    }

}

class CarroEspecial extends Carro{
    constructor(estagioTurno){
        super(4,estagioTurno)
        this.velMax = 300 + this.turbo.potencia
        this.nome = "Carro especial"
        this.tipoinfo = 1
    }

    info(){
        if (this.tipoinfo == 1) {
            super.info()
        } else {
            console.log("----------------------");
            console.log( "Nome: " + this.nome);
            console.log( "Vloecidade: " + this.velMax);
            console.log( "Turbo" + this.turbo.potencia);
            console.log("----------------------");
        }
    }
}

const c1 = new Carro(1,0)
const c2 = new Carro(2,1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()