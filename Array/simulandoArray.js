const quaseArray = {1:'Rafael', 2:'Danilo', 3:'Gabriel'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Danilo', 'Gabriel']
console.log(quaseArray.toString(), meuArray)
