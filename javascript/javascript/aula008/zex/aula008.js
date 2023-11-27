function carregou(){
    console.log('A pagina carregou');
}

function rolouPag() {
    console.log('Esta rolando a pagina');
}

function focou() {
    document.querySelector('h1').style.color = 'red';
}

function desfocou() {
    document.querySelector('h1').style.color = 'black';
}

let botaoEnviar = document.querySelector('#botaoEnviar');

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();// Não fazer o submit padrao (Nao recaregou a pagina depois de enviar)
    console.log('Clicou no botão enviar');
})