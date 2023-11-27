let titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula 5 - Árvore DOM'; // textContent para acessar ou alterar o conteudo

let box = document.querySelectorAll('.box'); // querySelectorAll Retorna um array
document.write(box[0].textContent);
document.write(box[1].textContent);
document.write(box[2].textContent);

box[0].textContent = 'Texto alterado com JS';

/*
    Outras formas de selecionar elementos
        getElementsByTagName
        getElementById
        getElementsByClassName
*/

