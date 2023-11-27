const caixaInputText = document.querySelector("#input")
const boxCursos = [...document.querySelectorAll('.curso')]
const caixaDeSelecao = [...document.querySelectorAll('.i')]

const btnCursoSelecionado = document.querySelector('#curso-selecionado')
const btnRemoverSelecionado = document.querySelector('#removerSelecionado')

const btnAddCursoAntes = document.querySelector('#btn-add-antes')

const radioSelecionadoFuncao = () => {
  const todosRadios = [...document.querySelectorAll('input[type=radio]')]
  const radioSelecionado = todosRadios.filter((el)=>{
        return el.checked
    })
   return radioSelecionado[0]
}

caixaDeSelecao.map((el, index) => {
    el.addEventListener('click', () => {
          if (el.checked) {
            boxCursos[index].classList.add('selecionado');
          } else {
            boxCursos[index].classList.remove('selecionado');
          }
          boxCursos.map((curso, i) => {
            if (i !== index) {
              curso.classList.remove('selecionado');
      }
    });
  });
});
  

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const radioSelecionado = radioSelecionadoFuncao()
    if (radioSelecionado == undefined) {
      alert("Nenhum curso selecionado")
    } else{
    const cursoSelecionado = radioSelecionado.parentElement.querySelector('p').textContent;
    caixaInputText.value = cursoSelecionado;
    }
})

btnRemoverSelecionado.addEventListener("click", (evt) => {
  const radioSelecionado = radioSelecionadoFuncao()
  try {
    const cursoSelecionado = radioSelecionado.parentNode;
    cursoSelecionado.remove
  ();
  }catch (error) {
    alert("Nenhum curso selecionado")
  } 
})

let indice = 8
const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("class", "curso")
  
  const novoParagrafo = document.createElement("p")
  novoParagrafo.textContent = curso;

  const novoRadio = document.createElement("input")
  novoRadio.type = "radio"
  novoRadio.name = "inputRadio"
  novoRadio.setAttribute("id", "inputRadio-" + indice)
  novoRadio.setAttribute("class", "i")

  novoElemento.appendChild(novoParagrafo)
  novoElemento.appendChild(novoRadio)

  const divPai = document.querySelector("#box-2")

  divPai.appendChild(novoElemento)
  indice++
}

btnAddCursoAntes.addEventListener('click', () => {
  if (caixaInputText.value != "") {
    const novoCurso = criarNovoCurso(caixaInputText.value)
    novoCurso.insetBefore(novoCurso,)
   caixaInputText.value = ""
  }else{
    alert("Digite o nome do curso")
  }
   
});

console.log(boxCursos)

// ERRO ELEMENTOS CRIADO NAO ESTAO NO ARRAY