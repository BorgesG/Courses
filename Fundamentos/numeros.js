const peso1 = 1.0
const peso2  =  Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.1
const avaliacao2 = 6.14

const total = avaliacao1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('Média:', media)