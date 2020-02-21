const alunos = [

    {nome:'joão', nota: 7.2, bolsista: false},
    {nome:'Maria', nota: 5.9, bolsista: true},
    {nome:'Pedro', nota: 8.1, bolsista: false},
    {nome:'Ana', nota: 4.8, bolsista: true}
]

//Desafio 1 - Todos os alunos são bolsistas?
    const todosBolsistas = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
//Desafio 2 - Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

