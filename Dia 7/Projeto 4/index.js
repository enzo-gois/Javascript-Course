let computerNumber;
let userNumbers = []
let attempts = 0
let maxGuesses = 10;

function init() {
  computerNumber = Math.floor(Math.random()* 100 + 1)
}

function newGame() {
  window.location.reload()
}

function compareNumbers() {
  const userNumber = Number(document.getElementById('inputBox').value)
  if(userNumber > 100) {
    document.getElementById('textOutput').innerHTML = 'Tyoe a number just in the range! '
  } else if(userNumber < 0) {
    document.getElementById('textOutput').innerHTML = 'Out of range'
  } else {
    userNumbers.push(' ' + userNumber)
  document.getElementById('guesses').innerHTML = userNumbers + ' '

  if(attempts < maxGuesses) {
    if(userNumber > computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Your number is too high!'
      document.getElementById('inputBox').value = ''
      attempts++
      document.getElementById('attempts').innerHTML = attempts
    } else if(userNumber < computerNumber){
      document.getElementById('textOutput').innerHTML = 'Your number is too low!'
      document.getElementById('inputBox').value = ''
      attempts++
      document.getElementById('attempts').innerHTML = attempts
    } else {
      document.getElementById('textOutput').innerHTML = 'Congratulations!!'
      attempts++
      document.getElementById('attempts').innerHTML = attempts
      document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
  } else {
    document.getElementById('textOutput').innerHTML = 'You Lose!' + 'The computer number was ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
  }
  }
}