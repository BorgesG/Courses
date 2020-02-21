Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){

    if(nota.entre(9, 10)){
        console.log('Quadro de Honra:' + nota)
    } else if(nota.entre ( 7, 8.99)){
        console.log('Aprovado' + nota)
    } else if(nota.entre(5, 6.99)){
        console.log('Recuperação!:' + nota)
    } else if(nota.entre(0, 4.99)){
        console.log('Reprovado:' + nota)
    } else {
        console.log('Nota inválida, por favor digite uma nota de 0 a 10.')
    }

}

imprimirResultado(9.5)
imprimirResultado(0.6)
imprimirResultado(8.2)
imprimirResultado(5.1)
imprimirResultado(10)
imprimirResultado(10.1)
