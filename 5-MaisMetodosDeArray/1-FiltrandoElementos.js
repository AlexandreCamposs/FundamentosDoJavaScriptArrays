const nomes = ["Ana", "Marcos", "Maria", "Paulo"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
console.log(`Você tirou menos que 5 ${reprovados} e foi reprovado.`)