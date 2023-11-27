// Objetos

let pessoa = {
    nome    : 'Carlos',
    idade   : 25,
    peso    : 76.4,
    altura  : 1.75,
    cnh     : true,
}

let produtos = {
    descricao: [],
    preco: [],
}

const carros = {
    marca   : ['Fiat','Ford','Volkswagen'],
    marca   : ['Uno', 'Ka', 'Polo'],
    ano     : [1999, 2005, 2010],
}

// Acessar iformações 
console.log(carros.marca);
console.log(carros['ano']);

// Atulizar dados
pessoa.nome = "Carlos Junior";
console.log(pessoa.nome);

produtos.descricao = ['Feijão'];
produtos.preco = [4.99];

produtos.descricao = [...produtos.descricao, 'Arroz'];
produtos.preco = [...produtos.preco, 5.99];           // QUANDO ATUALIZAR OS VALORES LEBRAR DE COPIAR OS JA EXISTENTES USANDO SPREED
console.log(produtos.descricao);
console.log(produtos.preco);