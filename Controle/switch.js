const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) //Não retorna verdadeiro ou falso, e sim um resultado inteiro.
    {
        case 10:
        case 9:
              console.log('Quadro de honra')
            break

        case 8: 
        case 7:
               console.log('Aprovado')
            break
            
        case 5:
        case 6:
                console.log('Recuperação')
                break
        case 0:
        case 4:
               console.log('Reprovado')
        break

        default:
            console.log('Nota inválida')
    }

}

imprimirResultado(5.5)
imprimirResultado(9)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(11)