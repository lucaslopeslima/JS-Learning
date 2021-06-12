/* var calcMedia = function(){
    return (this.nota1 + this.nota2)/2
}

var turma = [
    {   
        nome:"igor",
        nota1:9,
        nota2:7,
        media: calcMedia
    }
    ,
    {
        nome:"joão",
        nota1:4,
        nota2:3,
        media: calcMedia
    }
]

var aluno = turma[1]
console.log(aluno)
console.log(aluno.media()) */

/////////////////////////////////////////////////////////////////

/*var calcMedia = function(){
    return (this.nota1 + this.nota2)/2
}
function criarAluno(nome, n1, n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media: calcMedia
    }
}

var aluno = criarAluno('lucas', 10, 9)
console.log(aluno)
console.log(aluno.media())*/

//////////////////////////////////////////////////////////////

/*function criarAluno(nome, n1, n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media: function(){
            return (this.nota1 + this.nota2)/2
        }
    }
}

var turma = [
    criarAluno('Igor', 9, 8),
    criarAluno('João', 5, 7),
    criarAluno('Marcela', 7, 8),
    criarAluno('Ana', 6, 9)
]

var aluno = turma[2]
/* console.log(aluno)
console.log(aluno.media()) */

/*for (var aluno of turma){
    console.log(aluno)
}

turma.forEach(function (elemento){
    console.log(elemento)
    }
)*/

///////////////// MAIS UMA MANEIRA DE CRIAR OBJETOS /////////////

/* function criarAluno(nome, n1, n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media: function(){
            return (this.nota1 + this.nota2)/2
        }
    }
} */

function aluno(nome, n1, n2){
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function(){
        return (this.nota1 + this.nota2) /2
    }
}


var a = new aluno("igor", 8, 7)
console.log(a.media())

/* for (var aluno of turma){
    console.log(aluno)
} */

/* turma.forEach(function (elemento){
    console.log(elemento)
    }
) */