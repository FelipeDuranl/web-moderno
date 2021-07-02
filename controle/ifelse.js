const imprimirResult = function(nota){
    if(nota >=7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}
imprimirResult(10)
imprimirResult(6)
imprimirResult('Epa!')// Cuidado, linguagem fracamente tipada !!!!!!
imprimirResult(true)
imprimirResult(false)