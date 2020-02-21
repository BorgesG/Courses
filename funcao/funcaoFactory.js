//A função factory retorna um objeto.

//Factory simples

function criarPessoa(){
    return{
        nome: 'Ana',
        idade: 25,
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
