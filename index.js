
let countdownTime = new Date('Sep 8 2021 23:59:59').getTime()

let countdown = setInterval(() => {
  let currentTime = new Date().getTime()
  let timeLeft = countdownTime - currentTime

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  document.querySelector('.days').innerHTML = days
  document.querySelector('.hours').innerHTML = hours
  document.querySelector('.minutes').innerHTML = minutes
  document.querySelector('.seconds').innerHTML = seconds

  if (timeLeft <= 0) {
    clearInterval(countdown)
    document.querySelector('countdown-box').innerHTML = 'ADIOS!'
  }
}, 1000)
