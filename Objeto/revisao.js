const produto = new Object
produto.nome = 'Celular'
produto['Marca do produto'] = ['Morola']
produto.preco = 1580

console.log(produto)
delete produto['Marca do produto']
console.log(produto)

const carro = {

    modelo: 'A4',
    marca: 'Audi',
    preco: 110000,
        proprietario:{
                nome: 'Gabriel',
                idade: 22,
                endereco:{
                    logradouro: 'Silva Jardim',
                    numero: 566,
                    cidade: 'Guapiaçu',
                    estado: 'SP'
                }
        },

        condutores:[{
                nome:'Junior',
                idade: 18,

        },
        {
                nome: 'Ana',
                idade: 34
        
        }]
}

console.log(carro)