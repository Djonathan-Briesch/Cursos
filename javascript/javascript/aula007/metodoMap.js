const cursos = ['HTML','CSS','JavaScript','PHP','React']

let c = cursos.map((elemento, indice) => { // Map percorre toda colecao (Usar quando precisar trabalhar com todos os elementos, mais otmizado do que o for nesse caso)
    console.log("Curso: " + elemento);
    console.log("Posicao do curso: " + indice);
    console.log("----------------------------");
    return "<div>" + elemento + "</div>";
});

console.log(c);