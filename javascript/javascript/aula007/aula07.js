/*
let box = document.querySelectorAll('.box');

function olaMundo(){ // Funções sem parametros e sem retorno  (procedure) 
    document.write('Olá Mundo sem retorno <br>');
}

function olaMundo2() {
    return 'Olá Mundo com retorno <br>';
}

olaMundo();
document.write(olaMundo2());

let x = 2;
let y = 5;
let mensagem = 'Mesagem exibida';

// função com parametros e sem retorno (procedure)
function somar(n1,n2) {
    document.write((n1 + n2) + "<br>");
}

// função com parametros e com retorno (Function)
function somar2(a,b) {
    return a + b;
}

somar(x,y);
somar(25,5);

document.write(somar2(x,y) + "<br>");
document.write(somar2(25,5) + "<br>");

// Parametros REST em funcoes
function soma(...valores) {// nao limita os valores recebidos
    let tam = valores.length;
    let res = 0;
    for(let v of valores){
        res+=v;
    }
    return res;
}
console.log(soma(10,2, 10 ,20,12))

/* 
    funções anonimas: 
        Não tem nome,
        pode ou não ter parametros,
        pode ou não ter retorno.
*/
 /*
let titulo = document.querySelector('h1');

titulo.addEventListener('click', function () {
    console.log('Clicou no título');
});

// Funcao construtora Anonima
const f = new Function("v1","v2", "return v1+v2")// o F de function é maiusculo
console.log(f(10,5))
/*
// Arrow Functions (ES6) 

// É uma função anonima 
// Não usa a palavra function 
// Não precisa usar a palavra return

const olaMundoArrow = () => {
    document.write("Texto escrito com Arrow function <br>");
}

olaMundoArrow();
const olaMundoArrow2 = () => 'Outra Arrow Function';
document.write(olaMundoArrow2());

*/

// Funcoes Geradoras

function* cores() {
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
}

let itc = cores();
//console.log(itc.next().value);
//console.log(itc.next().value);
//console.log(itc.next().value);
//console.log(itc.next().value);

function* perguntas() {
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return 'Seu nome é: ' + nome + ', seu esporte favorito é: ' + esporte;
}

const itp = perguntas();

console.log(itp.next().value);
console.log(itp.next('Bruno').value);
console.log(itp.next('Natacao').value);

function* contador() {
    let i =0;
    while (true) {
        yield ++i
    }
}

const itCont = contador();
for (let i = 0; i < 10; i++) {
    console.log(itCont.next().value);
}