const nomes = [
  "Alexandre",
  "Pedro",
  "Samuel",
  "Paulo",
  "Renan",
  "Enzo",
  "Juliana",
  "Erike",
  "Ricardo",
  "Natalia",
  "Roberta",
  "Mauro",
];
console.log("tamanho do Array", nomes.length);

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`O tamanha da primeira turma é ${sala1.length}`);

console.log("O tamanho da segunda turma é", + sala2.length);
