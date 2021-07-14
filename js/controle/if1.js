function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('passou com ' + nota)
    }else{
        console.log('reprovado com '+ nota)
    }
}
soBoaNoticia(8)
soBoaNoticia(5)

function seForVerdade(valor){
    if (valor){
        console.log('é verdade... '+ valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade(true)
seForVerdade(false)