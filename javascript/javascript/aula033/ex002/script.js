let numeros = [10,20,30,40,50,60,70,80,90]

let [a,b,c,...d] = numeros

let obj = { 
    nome: "bruno",
    sobrenome: "Osvaldo"
}

let {nome,sobrenome} = obj

const cores =() =>{
    return ["Verde","Amarelo","Azul","Vermelho"]
}

let [c1,c2,,c3,c4] = cores()

let texto = "Curso de JavaScript"
let [...t1] = texto.split(" ")
let [,,t2] = texto.split(" ")


console.log(`
    ${a}
    ${b}
    ${c}
    ${d}

    ${nome}
    ${sobrenome}


    ${c1}
    ${c2}
    ${c3}
    
    ${t1}
    ${t2}

`);

