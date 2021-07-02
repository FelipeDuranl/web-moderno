function compras(work1, work2){
    const comprarSoverte = work1 || work2 // ou
    const comprarTv50 = work1 && work2 // &&
    const comprarTv32 = work1 != work2 // negação logica
    const manterSaudavel = !comprarSoverte //negação loguica - unario
    //const comprarTv30 = !!(work1 ^ work2) //bitwise
    return{ comprarSoverte, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))