// adcionar uma nova propriedade ou metodo ao objeto

const Nave = function (energia) {
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(120)

Nave.prototype.vidas = 3
Nave.prototype.disparar = function () {
    if (this.disparos > 0) {
        this.disparos--
    }
}

console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.vidas);
console.log(n1.disparos);
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos);