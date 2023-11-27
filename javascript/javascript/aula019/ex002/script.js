/*
    EXEMPLO DE USO
    VARIOS INIMIGOS PRECISAO FICAR ALERTAS
    EM VEZ DE ALERTALOS UM POR UM EU ALERTO A CALSSE INIMIGOS
 */

class Npc {

    static alerta = false

    constructor(energia){
        this.energia = energia
    }

    info = () =>{
        console.log(`Energia: ${this.energia} Alerta: ${Npc.alerta?"Sim":"Nao"}`);

    }

    static alertar = ()=>{
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(70)

Npc.alerta = true
Npc.alertar()


npc1.info()
npc2.info()
npc3.info()