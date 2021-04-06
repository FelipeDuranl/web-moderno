const [a]  = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
// function soma (a, b){
//     c = a + b
//     return c
// }
// console.log(soma(3, 3))

// for (let i = 0; i <= 100; i++){
//     console.log(i)
// }