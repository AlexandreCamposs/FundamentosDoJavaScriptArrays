/*  Crie uma função que receba como argumento o nome de um aluno
    Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice
    Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.*/


const alunos = ["Joao", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

let listaNotasAlunos = [alunos,medias]
//includes -> Booleano  True or False
//indexOf  -> 3 Retorna número referente ao índice
const exibeNotaDoAluno = (nomeDoAluno) => {
    if (listaNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaNotasAlunos[0].indexOf(nomeDoAluno)
                             //[0]  [3]
        return listaNotasAlunos[0][indice] + ` Sua média foi ${listaNotasAlunos[1][indice]} `
    }else {
        return "Aluno não está na lista!"
    }
}
console.log(exibeNotaDoAluno('luiz'))