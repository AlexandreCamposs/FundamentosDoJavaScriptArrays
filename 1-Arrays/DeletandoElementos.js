// Um prrofessor acidentalmente lançou 5 notas no sistema. 10, 6, 8, 5.5, 10
// Para corrigir, remova a última nota e faça o cálculo da média correta

const notas = [10, 6, 8, 5.5, 10];
notas.pop();
console.log(notas);

let media = (notas[0]+ notas[1]+ notas[2]+ notas[3]) / notas.length;
console.log(media);
console.log(`A nota do alura Alexandre é foi ${media}`)