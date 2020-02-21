const avo = {atri1: 'A'}
const pai = {__proto__: avo, atri2: 'B'}
const filho = {__proto__ : pai, atri3: 'C'}

console.log(filho.atri1) // usando a notação __proto__ cria-se um modelo de herança entre os objetos

const carro = {
    velAtual : 0,
    velMaxima : 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMaxima}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima : 324 //shadowing
}

const volvo = {
    modelo: 'T20',
    status(){
            return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)

volvo.acelerarMais(100)
console.log(volvo)

