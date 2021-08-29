import fullInputValue from './inputs.js'
console.log(fullInputValue)

let countdownTime = null

if (fullInputValue.length > 6) {
  countdownTime = new Date(fullInputValue)
} else {
  countdownTime = new Date('09/08/2021 23:59:59')
}

console.log(countdownTime)

let countdown = setInterval(() => {
  let currentTime = new Date()
  let timeLeft = countdownTime - currentTime

  if (timeLeft < 0) {
    timeLeft = 0
  }

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  document.querySelector('.days').innerHTML = days || 0
  document.querySelector('.hours').innerHTML = hours || 0
  document.querySelector('.minutes').innerHTML = minutes || 0 
  document.querySelector('.seconds').innerHTML = seconds || 0

  if (timeLeft <= 0) {
    clearInterval(countdown)
    document.querySelector('countdown-box').innerHTML = 'ADIOS!'
  }
}, 1000)
