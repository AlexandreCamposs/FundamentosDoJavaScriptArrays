/*
Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas:
['ana Julia', 'Caio vinicios', 'BIA silva ']
*/

let nomes = ['ana Julia', 'Caio vinicios', 'BIA silva ', 'alexandre campos']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())
console.log(nomesAtualizados)