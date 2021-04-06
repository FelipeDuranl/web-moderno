// novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua',
        numero: 188
    }
}
console.log(pessoa.nome)

const {nome, idade} = pessoa // chama pra fora os atributos
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // mudar o nome da atributo
console.log(n, i)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)