function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota + 1;

    // console.log(this.nome);
    // console.log(this.nota);

    this.dados_anonimos = function () {
        setTimeout(function () {
            console.log(this.nome)
            console.log(this.nota);
        },2000)
    }
    this.dados_arrow = function () {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota);
        },2000)
    }

}

const aluno1 = new aluno("bruno", 100)
aluno1.dados_anonimos()
aluno1.dados_arrow()