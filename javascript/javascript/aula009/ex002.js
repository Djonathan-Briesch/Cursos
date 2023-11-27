// Estrutura de desisao (escolha)

      let situacaoAluno = '';
//    let situacaoAluno = 'Aprovado';
//    let situacaoAluno = 'Reprovado';
//    let situacaoAluno = 'Recuperaçao';

switch(situacaoAluno){
    case 'Aprovado':
        console.log('Parabéns você passou de ano!!!');
        break;
    case 'Reprovado':
        console.log('Infelizmente você não passou de anos.');
        break;
    case 'Recuperaçao':
        console.log('Ainda da tempo de passar!!');
        break;
    default:
        console.log('Algo deu errado tente novamente mais tarde. :(');
        break;
    
}