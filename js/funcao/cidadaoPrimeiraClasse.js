// criar funcçao de forma literal
function fun1(){ }

// armazenar em uma variavel
const fun2 = function (){ }

//armmazenar em um array
const array = [function (a, b){ return a + b}, fun1, fun2]

console.log(array[0](2,3))

const obj = {}

// armazenar em um atributo de objeto
obj.falar = function (){ return 'Opa' }
console.log(obj.falar())

// passar função como parametro
function run(fun){
    fun()
}

run(function(){ return console.log('executando...')})

// uma função pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(3)
