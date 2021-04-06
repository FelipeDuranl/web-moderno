console.log(typeof Object) //Uma function
console.log(typeof new Object) //Instânciando uma função

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} //ES 2014 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())