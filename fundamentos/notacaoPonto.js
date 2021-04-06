console.log(Math.ceil(6.1)) //arredondamento para cima
console.log(Math.floor(6.1))//arredendamento para baixo

const obj1 = {}
obj1.nome = 'bola'// um atributo dentro do objeto
// obj1['nome'] = 'bola 2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //o nome associado a 
    this.exec = function(){
        console.log('Exec...')
    }
}

const Obj2 = new Obj('Cadeira') 
const Obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()

//this é usado para deixar publico 
//utilizando a notação ponbto para localizar no js
