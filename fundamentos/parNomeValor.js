// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'rua verador',
        numero: 188
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)