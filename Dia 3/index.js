//POO
// const book = {
//   bookTitle: 'Atomic Habits',
//   bookAuthor: 'James Clear',
//   bookPages: 306,
//   bookChapters: {
//     chap1: 'Fundamentals',
//     chap2: '1st law'
//   },
//   printBook: function() { //FUNÇÕES DENTRO DE UM OBJETO
//     console.log('Printing...')
//   }
// }
// book.printBook()


//FACTORY 
// function createBook(title, author, pages, ) {
//   const book = {
//     bookTitle: title,
//     bookAuthor: author,
//     bookPages: pages,
//     printBook: function() {
//       console.log('Printing...')
//     }
//   }
//   return book
// }
// const book1 = createBook('Coisa De Louco','Enzo',20)
// const book2 = createBook('Tá loco muito loco','Enzo',50)
// book1.color = 'White' //PROPRIEDADES
// console.log(book1)
// console.log(book2)


//CONSTRUCTOR    MUITO MAIS LIMPO E FÁCIL
// function CreateBook(title, author, pages, ) {
//     this.bookTitle = title
//     this.bookAuthor = author
//     this.bookPages = pages
// }
// const book1 = new CreateBook('Coisa De Louco','Enzo',20)
// console.log(book1)


//OBJETOS BUILT IN
// console.log(Math.min(2,3,6,10))


//BUILT IN STRING
// let message = 'Hey, my name is Enzo'
// console.log(message.length)
// console.log(message.endsWith('o'))


//TEMPLATE LITERALS
// let firstName = 'Enzo'
// const email = 'Hi' + firstName + '\nThe meeting is confirmed! \nAndre'
// const email2 = `Hi ${firstName}, 
// The meeting is confirmed! 
// ${firstName}`
// console.log(email)
// console.log(email2)

