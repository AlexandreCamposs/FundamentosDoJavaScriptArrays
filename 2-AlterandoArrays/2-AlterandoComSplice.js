                         //   0     // 1     // 2     // 3   // 4  índice
const listaDeChamada = ['Alexandre','Pedro','Samuel','Ana','Leo']
console.log(listaDeChamada);

listaDeChamada.splice(1,2,'Marcos')    // => número 1 seleciona o índice, número 2 quantos que vai ser retirado a partir daquele índice e a parte de nome quem vai ser colocado.
console.log(listaDeChamada)

listaDeChamada.splice(1,0,'Leonardo') // => Adicionado Leonardo no índice 1 sem apagar ninguém.
console.log(`Lista de chamada: ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)