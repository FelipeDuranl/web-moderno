const nome = 'rebeca'
const concatenacao = 'Ola ' + nome + ' !'
const template = `
    Olá
    ${nome}!`//interpolação

console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Eii...${up('cuidado')}!`)