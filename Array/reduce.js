const alunos = [

    {nome:'joão', nota: 7.2, bolsista: false},
    {nome:'Maria', nota: 5.9, bolsista: true},
    {nome:'Pedro', nota: 8.1, bolsista: false},
    {nome:'Ana', nota: 4.8, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
}, 10)

console.log(resultado)
