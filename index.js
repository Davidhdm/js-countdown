import { dateInput, timeInput } from './inputs.js'

let countdownTime = ''
let inputData = ''

window.onload = () => {
  const form = document.querySelector('.form')
  form.onsubmit = (event) => {
    event.preventDefault()
    if (!timeInput.value) {
      inputData = dateInput.value
    } else {
      inputData = dateInput.value + 'T' + timeInput.value
    }

    if (inputData.length > 6) {
      countdownTime = new Date(inputData).getTime()
    }
  }
}

let countdown = setInterval(() => {

  if (!countdownTime) {
    countdownTime = new Date('09/08/2021 23:59:59').getTime()
  }

  let currentTime = new Date().getTime()
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

  const printSecondsLeft = parseInt(timeLeft / 1000) + ' seconds left'
  console.log(printSecondsLeft)
}, 1000)
