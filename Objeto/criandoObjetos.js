//Objeto literal
const obj = {}
console.log(obj)

//Funcões construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)   
    }
}

const p1 = new Produto ('Cadeira gemer', 900, 0.15)
const p2 = new Produto ('Pc gamer', 5000, 0.70)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, falta){
    return{
        nome,
        salarioBase,
        falta,
        getSalario(){
            return(salarioBase / 30) * (30 - falta)
        }
    }
}
const f1 = new criarFuncionario ('Maria clara', 3000, 2)
const f2 = new criarFuncionario ('Gabriel', 9000, 5)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
