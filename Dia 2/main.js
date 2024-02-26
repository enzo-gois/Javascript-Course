// OPERADORES ARITMÉTICOS
// let num1 = 3
// let num2 = 2
// let total = num1 + num2
// console.log(num1 + num2) // ADIÇÃO
// console.log(num1 - num2) // SUBTRAÇÃO
// console.log(num1 * num2) // MULTIPLICAÇÃO
// console.log(num1 / num2) // DIVISÃO
// console.log(num1 % num2) // RESTO DA DIVISÃO
// console.log(num1 ** num2) // POTENCIAÇÃO
// INCREMENTO ++
// DECREMENTO --
// console.log(++total) // ANTES DA EXECUÇÃO
// console.log(total++) // DEPOIS DA EXECUÇÃO
// console.log(total) 


//OPERADORES DE ATRIBUIÇÃO
// let num1 = 3
// num1 += 20 // IGUAL A ==> num1 = num1 + 20
// console.log(num1)


//OPERADORES DE COMPARAÇÃO
// let num1 = 5
// console.log(num1 > 3) // MAIOR QUE
// console.log(num1 < 3) // MENOR QUE
// console.log(num1 >= 5) // MAIOR OU IGUAL
// console.log(num1 <= 5) // MENOR OU IGUAL
// console.log(num1 === 3) // IGUAL A
// console.log(num1 !== 3) // NÃO É IGUAL | DIFERENTE


//OPERADORES DE IGUALDADE
// let num1 = '1' 
// let num2 = 1
// console.log(num1 === num2) // === ==> VERIFICA TIPO + VALOR
// console.log(num1 == num2) // == ==> VERIFICA SÓ O VALOR


//OPERADOR TERNÁRIO
// let driver = 90             
// let speed = driver > 110 ? 'Acima da velocidade': 'Velocidade permitida'
// console.log(speed)


//OPERADORES LÓGICOS
// AND ==> E === &&
// OR ==> OU === ||
// let temIdadeMinima = true
// let temTituloEleitor = false
// // ====================================
// let podeVotar = temIdadeMinima || temTituloEleitor
// console.log('Pode Votar: ' + podeVotar)
// // ====================================
// let podeViajar = !podeVotar
// console.log('Pode viajar: ' + podeViajar)


//OPERADORES LÓGICOS COM STRINGS
// let corCliente = 'white'
// let corEstoque = 'black'
// let corVendida = corCliente || corEstoque
// // RETORNA A COR PELA ORDEM   ESQ P/ DIR
// console.log(corVendida)


//PRECEDÊNCIA
// let num1 = 3+4*2
// let num2 = (3+4) * 2
// console.log(num1)
// console.log(num2)


//CONDICIONAIS || IF e ELSE
// let driverSpeed = 110

// if(driverSpeed > 110){
//   console.log('Driving too fast! ')
// }else if(driverSpeed >= 40 && driverSpeed <= 110){
//   console.log('OK')
// } else {
//   console.log('Driving too slow! ')
// }


// SWITCH & CASE
// let airport = 'MCO'

// switch (airport) {
//   case 'MCO':
//     console.log('Orlando')
//     break
//   case 'JFK':
//     console.log('John F. Kennedy')
//     break
//   case 'SEA':
//     console.log('Seatle')
//     break
//   default:
//     console.log('Unknown')
// }


//FOR LOOP
// for(i = 1;i <= 10; i++){
//   console.log('Numero ' + i)
// }


//WHILE LOOP
// i = 1
// while (i<=10) {
//   console.log('Numero ' + i)
//   i++
// }


//DO WHILE LOOP
// i = 1
// do {
//   console.log('Numero ', i)
//   i++
// } while(i <= 10)


//FOR IN LOOP
// const myCar = {
//   model: 'BMW',
//   year: 2023,
//   km: 68000
// }

// for(let i in myCar){
//   console.log(i, myCar[i])
// }


//FOR OF LOOP
const friends = ['Marcos', 'Ana', 'Jose']

for(let i of friends) {
  console.log(i)
}