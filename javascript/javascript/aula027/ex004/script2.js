class Cursos{
    static cursos = ["Javascript","PHP","Java","C++"]
    constructor(){}
    static getCursos = () =>{
        return this.cursos
    }

    static getCurso = (i) =>{
        return this.cursos[i]
    }

    static addCurso = (novoCurso) =>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso = () =>{
        this.cursos = []
    }
}

export default Cursos