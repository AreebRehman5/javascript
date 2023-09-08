let randomNum = Math.random() * 6
console.log('randomNum->', Math.ceil(randomNum))

let counter = document.getElementById('counter')
let counterNumber = 0

function plus () 
  if (counterNumber < 20) {
    counterNumber++
    counter.innerText = counterNumber
}


//function minus () {
  if (counterNumber > 0) {
    counterNumber--
    counter.innerText = counterNumber
  }


function reset () {
  counterNumber = 0
  counter.innerText = counterNumber
}

function handleCounter (type) {
  console.log(type)
  if (type === 'plus' && counterNumber < 20) {
    counterNumber++
  }
  if (type === 'minus' && counterNumber > 0) {
    counterNumber--
  }
  if (type === 'reset') {
    counterNumber = 0
  }
  counter.innerText = counterNumber
}