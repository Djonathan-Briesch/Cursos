const inputNumeroDeObjetos = document.querySelector("[data-input-n-objs]");
const inputQuantidadeDeObjetos = document.querySelector("[data-input-q-objs]");
const btnAdicionar = document.querySelector("[data-btn-add]");
const btnRemoverTodos = document.querySelector("[data-btn-remover]");
const box2 = document.querySelector("[data-box2]");

let alturaBox2;
let larguraBox2;
let bolas = [];
let numBolas = 0;

class Bola {
  constructor(arrayBolas, box) {
    this.tamanhoBola = Math.floor(Math.random() * 10) + 10;
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);

    larguraBox2 = box2.clientWidth;
    alturaBox2 = box2.clientHeight;

    this.posicaoX = Math.floor(
      Math.random() * (larguraBox2 - this.tamanhoBola)
    );
    this.posicaoY = Math.floor(Math.random() * (alturaBox2 - this.tamanhoBola));

    this.velocidadeX = Math.floor(Math.random() * 2) + 0.5;
    this.velocidadeY = Math.floor(Math.random() * 2) + 0.5;

    this.direcaoX = Math.random * 10 > 5 ? 1 : -1;
    this.direcaoY = Math.random * 10 > 5 ? 1 : -1;

    this.box = box;
    this.arrayBolas = arrayBolas;

    this.cont = 0;
    this.id = Date.now() + "-" + Math.random() * 100000000000000;

    this.desenhar();

    this.controle = setInterval(() => this.controlar(), 10);

    this.eu = document.getElementById(this.id);

    numBolas++;
    inputNumeroDeObjetos.value = numBolas;
  }

  minhaPosicao = () => {
    return this.arrayBolas.indexOf(this);
  };

  remover = () => {
    clearInterval(this.controle);
    bolas = bolas.filter((b) => {
      if (b.id != this.id) {
        return b;
      }
    });
    this.eu.remove();
    numBolas--;
    inputNumeroDeObjetos.value = numBolas;
  };

  desenhar = () => {
    const div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("class", "bola");
    div.setAttribute(
      "style",
      `left:${this.posicaoX}px; top:${this.posicaoY}px; width:${this.tamanhoBola}px; height:${this.tamanhoBola}px; background-color:rgb(${this.r},${this.g},${this.b});`
    );
    this.box.appendChild(div);
  };

  controleBordas = () => {
    if (this.posicaoX + this.tamanhoBola >= larguraBox2 || this.posicaoX <= 0) {
      this.direcaoX *= -1;
    }

    if (this.posicaoY + this.tamanhoBola >= alturaBox2 || this.posicaoY <= 0) {
      this.direcaoY *= -1; 
    }
  };

  controlar = () => {
    this.controleBordas();
    this.posicaoX += this.direcaoX * this.velocidadeX;
    this.posicaoY += this.direcaoY * this.velocidadeY;
    this.eu.setAttribute(
      "style",
      `left:${this.posicaoX}px; top:${this.posicaoY}px; width:${this.tamanhoBola}px; height:${this.tamanhoBola}px; background-color:rgb(${this.r},${this.g},${this.b});`
    );
    if (this.posicaoX > larguraBox2 || this.posicaoY > alturaBox2) {
      this.remover();
    }
  };
}

window.addEventListener("resize", () => {
  alturaBox2 = box2.clientHeight;
  larguraBox2 = box2.clientWidth;
});

btnAdicionar.addEventListener("click", () => {
  const quantidade = inputQuantidadeDeObjetos.value;
  for (let i = 0; i < quantidade; i++) {
    bolas.push(new Bola(bolas, box2));
  }
});

btnRemoverTodos.addEventListener("click", () => {
  bolas.map((b) => {
    b.remover();
  });
});
