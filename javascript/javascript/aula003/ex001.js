// Arrays
// Os Itens de um array são numerados, começando no 0 
let produtos = ['Arroz','Feijão','Leite'];
let meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Ago','Set','Out','Nov','Dez' ];

//Add itens no final da lista
produtos.push('Açucar');
console.log(produtos);

// Remover do final da lista
produtos.pop();
console.log(produtos);

// Add no inicio
produtos.unshift('Uva','Maça');
console.log(produtos);

// Remove do Inicio
produtos.shift();
console.log(produtos);

// Remover itens especificos
produtos.splice(1,3) // 1 = posição e 3 a quantidade de itens apos a posiçao
console.log(produtos);

// Copiar arrays
let meses1 = meses.slice(0,3); // 0 = posição e 3 a quantidade de itens copiados apos a posiçao
console.log(meses1);

// Ver tamanho de arrays
console.log(meses.length);

// Operador spreed (...) copia 
let teste = [...produtos, 'Pera', 'Abacaxi'];
console.log(teste);

// Selecionar valores array
let teste2 = [10]
teste2[0] = "oi";
teste2[9] = 'Posição 9'
teste2[12] = 'Posição 12'
console.log(teste2);