let valor // não inicializada
console.log(valor)

valor = null // ausêncisa de valor
console.log(valor)
// console.log(valor.toString()) //Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)