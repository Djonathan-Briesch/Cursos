const caixa1 = document.querySelector("#caixa1")
const btn_c  = [...document.querySelectorAll(".curso")]

// console.log(caixa1.children[caixa1.children.length-3]);
// console.log(caixa1.children);

// console.log(document.getRootNode());
// console.log(btn_c[0].ownerDocument);

console.log(btn_c[0].hasChildNodes());//Possui filhos? (retorna texto tbm)
console.log(caixa1.children.length > 0 ? "Tem filhos" : "Nao tem filhos")

caixa1.firstElementChild.innerHTML = "teste"
caixa1.children[1].innerHTML = "CSS2"

console.log(btn_c[0].parentNode.parentNode.children[1])
console.log(caixa1.parentElement);