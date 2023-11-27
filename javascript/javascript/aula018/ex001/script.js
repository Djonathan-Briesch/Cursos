const Pessoa = {
    nome: "Djonathan",
    getNome: function() {
        return this.nome
    },

    setNome: function(nome) {
        this.nome = nome
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Bruno"
p2["nome"] = "Bridgertrudesmelda"
Pessoa.setNome("Pratrik")

console.log(Pessoa.nome);
console.log(p2.getNome());
console.log(p3.nome);