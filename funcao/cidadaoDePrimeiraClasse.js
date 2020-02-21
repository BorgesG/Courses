//criar de forma liral

function fun1() {}

//armazenar em uma variavél
const fun2 = function(){
    
} 

//Armazenar em uma array

const array = [function (a, b) {return a + b}, fun1, fun2]
 console.log(array[0](2, 3))  

 //armazenar em um atributo de objeto
 const obj = {}
 obj.falar = function(){return 'Opa'}
 console.log(obj.falar())

 //Passar uma funcao como parametro
function run (fun){
    fun()
}
run (function() {console.log('Executando...')})

//Uma função pode retornar outra funcão 

function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
