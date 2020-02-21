const notas = [7.2, 9.4, 5.7, 9.8, 4.3, 6.8]

//sem callback

let notasBaixas = []
for(let i in notas){
    if (notas [i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

//Com callback e Arrow

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)