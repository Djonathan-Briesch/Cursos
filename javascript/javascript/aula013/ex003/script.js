const container = document.getElementById("container");

const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo Parágrafo";

const segundoParagrafo = container.querySelector("p:nth-child(2)");

container.insertBefore(novoParagrafo, segundoParagrafo);

/*  
    parentNode.insertBefore(newNode, referenceNode);
    
    parentNode: É o elemento pai no qual você deseja inserir um novo nó.
    newNode: É o novo nó (elemento) que você deseja inserir.
    referenceNode: É o nó existente (elemento) antes do qual o novo nó será inserido.

*/