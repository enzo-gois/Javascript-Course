//ARRAYS
// const freinds = ['Marcos', 'Ana', 'Marcela']
// console.log(freinds)


//ADICIONANDO VALORES 
// const num = [7,8,9]
// num.push(10,11,12)
// num.unshift(1,2,3)
// num.splice(3, 0,4, 5, 6)
// console.log(num)


//LOCALIZANDO ITENS
// const num = [6,7,8,9]
// console.log(num.indexOf(8))
// console.log(num.indexOf(4))
// console.log(num.includes(6))


//LOCALIZANDO ITENS DE UMA ARRAY DE REFERENCIA
// const movies = [
//   {id:1, movieName: 'Dejvau'},
//   {id:2, movieName: 'Back to the future'},
//   {id:3, movieName: 'The Matrix'},
// ]
// console.log(movies.find(function(movie) {
//   return movie.movieName == 'The Matrix'
// }))


//ARROW FUNCTION
// const movies = [
//   {id:1, movieName: 'Dejvau'},
//   {id:2, movieName: 'Back to the future'},
//   {id:3, movieName: 'The Matrix'},
// ]
// console.log(movies.find(movie => 
//   movie.movieName == 'The Matrix'
// ))


//REMOVENDO ITENS DE UMA ARRAY
// const num = [5,6,7,8]
// // const final = num.pop()
// // const inicio2 = num.shift()
// const final3 = num.splice(2,2)

// console.log(num)
// console.log(final3)


//ESVAZIANDO UMA ARRAY
// let num = [5,6,7,8]
// // num = []
// // num.length = 0
// // num.splice(0, num.length)
// console.log(num)


//CONCATENDANDO UMA ARRAY
// let numbers = [5,6,7,8]
// let letters = ['a', 'b', 'c']
// all = numbers.concat(letters)
// half = all.slice(3,5)
// console.log(all)
// console.log(half)


//UTILIZANDO O JOIN
// let clients = ['Enzo', 'Jose', 'Ana']
// console.log(clients)
// let clientsJoin = clients.join(', ')
// console.log(clientsJoin)


//REVERTENDO UMA ARRAY
// let clients = ['Andre', 'Marcela', 'Jose']
// clients.sort()
// clients.reverse()
// console.log(clients)


//VERIFICANDO ELEMENTOS EM UMA ARRAY
// const tempLondon = [18, 13, 8, 2]
// const tempPositive = tempLondon.every(function(value) {
//   return value >= 0
// }) 
// console.log(tempPositive)


//FILTRANDO UMA ARRAY
// const tempLondon = [18, 13, 8, 2, -4]
// const tempPositive = tempLondon.filter(value => value >= 0) 
// console.log(tempPositive)