function trataErroElancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    throw {
        nome: erro.name,
        msg : erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!')

    } catch (e){
        trataErroElancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)