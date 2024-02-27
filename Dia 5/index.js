//FUNCTION DECLARATION
// function movie() {
//   console.log('The Matrix')
// }
// movie()


//FUNCTION EXPRESSION
// const car = function () {
//   console.log('BMW')
// }
// car()
// const truck = car
// truck()


//HOISTING
// movie()
// function movie() {
//   console.log('The Matrix')
// }
// ////////////////////////////////////
// car()
// const car = function () {
//   console.log('BMW')
// }


//ARGUMENTOS DE UMA FUNÇÃO
// function price(a, b) {
//   let total = 0
//   for(let value of arguments) {
//     total+= value
//   }
//   return total
// }

// console.log(price(10)) //// 10 + undefined == NaN
// console.log(price(10,20,30,40))


//PARAMETROS DEFAULT
// function carLoan(loan, rate = 2.9, years = 5) {
//   return (loan * rate / 100 * years) + loan
// }
// console.log(carLoan(20000))