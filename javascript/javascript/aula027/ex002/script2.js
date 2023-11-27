const cursos = ["Javascript","PHP","Java","C++"]
const cores = ["Azul","Vermelho","Verde"]

// const getCuros = () =>{
//     return cursos
// }
// export default getCuros

export default function getCuros() {
    return cursos
}

function getCuro(i) {
    return cursos[i]
}

export {cores,getCuro}