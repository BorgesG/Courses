//par nome/valor
const saudacao = 'Opa' //Contexto 1

function exec() {
    const saudacao = 'Falaaaaa' //Contexto 2
    return saudacao
}

//Objetos são grupos aninhados de par nome/valor

const cliente = {

    nome: 'Gabriel',
    idade: 22,
    peso: 90,
    edereco: {
        rua: 'Silva jardim',
        numero: 566
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
