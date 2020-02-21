const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //chave
console.log(Object.values(pessoa)) // valor
console.log(Object.entries(pessoa)) // constroi um array com as chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)  
}) //percorrer um array usando forEach e desestruturando os valores

Object.defineProperty(pessoa, 'dataNascimento', {  //criar um atributo 
    enumerable: true, //pode ser listada?
    writable: false, // pode ser modificada?
    value: 13/12/1997 // valor 
})

const dest = {a:1}
const o1 = {b:2}
const o2 = { c: 3, a: 2}
const obj = Object.assign(dest, o1, o2) // sobrescrever objetos.

console.log(obj)