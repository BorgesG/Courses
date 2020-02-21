//trabalhar com dados homogeneos 

let aprovados = new Array('Bia', 'Calors', 'Ana')
console.log(aprovados)

aprovados = ['Bianca', 'Carlinhos', 'Ana Paula']
console.log(aprovados)
aprovados.push('Gabriel')
console.log(aprovados) //adicionar elemento no  final do array
console.log(aprovados.length)  // tamanho do array

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1, 'Pedro', 'Lilian') // excluir elementos e adicionar
console.log(aprovados)