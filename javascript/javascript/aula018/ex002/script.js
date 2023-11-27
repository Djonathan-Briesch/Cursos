// HERANÇA EM POO

class Carro{ // Classe pai / Base
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = ''
    }

    ligar = () =>{
        this.ligado = true
    }

    desligar = () =>{
        this.ligado = false
    }

    setCor =(cor)=>{
        this.cor = cor
    }
}
// Classe filho 
class Militar extends Carro{// EXTENDS = HERDAR, Vai herdar as prpriedades de Carro
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)// Invoca algo da classe pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar =()=>{
        if (this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Normal",4)
c1.setCor("Azul")

const c2 = new Militar("Lutador",1,100,50)
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`
-------------------------------------------
    Nome: ${c1.nome}
    Portas: ${c1.portas}
    Ligado: ${(c1.ligado?"sim":"Não")}
    Velocidade: ${c1.vel}
    Cor: ${c1.cor}
-------------------------------------------
`);
console.log(`
-------------------------------------------
    Nome: ${c2.nome}
    Portas: ${c2.portas}
    Ligado: ${(c2.ligado?"sim":"Não")}
    Velocidade: ${c2.vel}
    Cor: ${c2.cor}
    Blindagem: ${c2.blindagem}
    Munição: ${c2.municao}
-------------------------------------------
`);