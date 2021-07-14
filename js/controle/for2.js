const notas = [6, 7, 9, 5, 4]

// for(let i in notas) Existem alternativas bem melhores que o for in
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa =  {
    nome: 'ana',
    idade: 10,
    peso: 60
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}