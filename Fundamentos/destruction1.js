const pessoa = {
    nome: 'Ana',
    idade: 25,
    peso: 74,
    endereço: {
        rua: 'Silva Jardim',
        numero: 566,
        bairro: 'Centro',
        cidade: 'Guapiaçu'
    }
}
const {nome, idade} = pessoa //Destruturing serve para retirar elementos
console.log(nome, idade)

