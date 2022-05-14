// Haverá uma palestra sobre padrões de projetos para os alunos das salas de javascript e python.
//Junte ambas as salas em uma única lista que exiba todas os alunos.

const salaDeJavaScript = ['Natalia','Ricardo','Mauro','Roberta','Erike','Alexandre']
console.log(salaDeJavaScript.length)
const salaDePythona = [
    'Pedro',
    'Samuel',
    'Paulo',
    'Renan',
    'Enzo',
    'Juliana']
console.log(salaDePythona.length)

const salaUnificadas = salaDeJavaScript.concat(salaDePythona)
console.log(`Alunos de JavaScript e Python: ${salaUnificadas}. Total de alunos: ${salaUnificadas.length}`)