let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(++num1 === --num2)
console.log(num1 === num2)

// function exp (x, y){
//     let result = Math.pow(x, y)
//     console.log(result)
// }
// console.log(exp(2, 2))