let imagem = document.querySelector('#foto');
imagem.setAttribute('src', 'Foto-p.jpg'); // o 1 atributo é o nome do atibuto e o 2 é o valor
imagem.setAttribute('height', '120px');

let titulo = document.querySelector('h1');
titulo.style.color = 'red';
titulo.style.backgroundColor = 'black'; 

// tela modo escuro
let tela = document.querySelector('body');

let btLight = document.querySelector('#btlight');
let btDark = document.querySelector('#btdark');

btLight.addEventListener('click', modoLight);
btDark.addEventListener('click', modoDark);

function modoLight() { 
    tela.classList.add('light');
    tela.classList.remove('dark');
}

function modoDark() {
    tela.classList.add('dark');
    tela.classList.remove('light');
}