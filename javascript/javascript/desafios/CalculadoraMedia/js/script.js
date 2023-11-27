let formulario = document.querySelector('form');

let cxNota1 = document.querySelector('#nota1');
let cxNota2 = document.querySelector('#nota2');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

let resultadoMedia = document.querySelector('#media');
let situacaoAluno = document.querySelector('.situacao');


function validarNumero(numero){
    let num1 = cxNota1.value;
    let num2 = cxNota2.value;
    
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 >10) {
        formulario.reset();
        situacaoAluno.innerHTML = 'Digite uma nota entre 0.0 e 10.0';
        situacaoAluno.style.backgroundColor = 'red';
        setTimeout(function(){
            situacaoAluno.innerHTML = 'Situação atual';
            situacaoAluno.style.backgroundColor = 'grey';
        }, 2000);      
    }
}

btnEnviar.addEventListener('click', function(e){
    let nota1 = parseFloat(cxNota1.value);
    let nota2 = parseFloat(cxNota2.value);
    let media = ((nota1 + nota2) / 2).toFixed(1);

    if (isNaN(media) || media < 0) {
        resultadoMedia.value = '0.0';
    } else {
        resultadoMedia.value = media; 
    }

    if(media < 3){
        situacaoAluno.innerHTML = 'Reprovado'
        situacaoAluno.style.backgroundColor = 'red'      
    } else if(media < 7){
        situacaoAluno.innerHTML = 'Recuperação'
        situacaoAluno.style.backgroundColor = 'orange'
    } else if(media < 10){
        situacaoAluno.innerHTML = 'Aprovado!!!'
        situacaoAluno.style.backgroundColor = 'green'
    } else {
        situacaoAluno.innerHTML = 'Situação atual';
        situacaoAluno.style.backgroundColor = 'grey';
    }
    e.preventDefault();
})

btnLimpar.addEventListener('click', function(){
    cxNota1.value = '';
    cxNota2.value = '';
    resultadoMedia.value = '0.0';
    situacaoAluno.innerHTML = 'Situação atual';
    situacaoAluno.style.backgroundColor = 'grey';
})

cxNota1.addEventListener('input', function(){
    validarNumero(this.value);
});

cxNota2.addEventListener('input', function(){
    validarNumero(this.value);
});
