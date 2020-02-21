const pilotos = ['Vettel', 'Massa', 'Alonso','Rakennen','Massa']
pilotos.pop() //Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final do array
console.log(pilotos) 

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no inicio do array
console.log(pilotos)

//splice pode adcionar ou remover elementos

//adicionar
pilotos.splice(2,0, 'Botas')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 =  pilotos.slice(2) // novo array 
console.log(algunsPilotos1) // pega alguns elementos do array criando um novo array

const algunsPilotos2 = pilotos.slice(1,4) // cria um novo array com indices determinados
console.log(algunsPilotos2)