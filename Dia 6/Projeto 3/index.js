const cores = ['red', 'blue', 'green', 'yellow', 'purple']
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  let randomColor = getRandomColor()
  document.body.style.background = cores[randomColor];
  document.querySelector('.color').innerHTML = cores[randomColor]
})

function getRandomColor() {
  return Math.floor(Math.random() * cores.length)
}