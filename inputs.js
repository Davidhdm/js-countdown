const dateInputBox = document.querySelector('.date-input-box')
const dateLabel = document.querySelector('.date-label')
const dateInput = document.querySelector('#date-input')

const timeInputBox = document.querySelector('.time-input-box')
const timeLabel = document.querySelector('.time-label')
const timeInput = document.querySelector('#time-input')

let dateInputFocus = false
let timeInputFocus = false

function hideLabel(label) {
  label.classList.add('hidden')
}

function showLabel(label) {
  label.classList.remove('hidden')
}

function setInputFocus(inputFocus, value) {
  if (inputFocus === 'dateInputFocus') {
    dateInputFocus = value
  }

  if (inputFocus === 'timeInputFocus') {
    timeInputFocus = value
  }
}

dateInput.addEventListener('focus', () => {
  setInputFocus('dateInputFocus', true)
})

dateInput.addEventListener('blur', () => {
  setInputFocus('dateInputFocus', false)
  if (!dateInput.value || dateInput.value === '') {
    showLabel(dateLabel)
  }
})

dateInputBox.addEventListener('mouseover', () => {
  hideLabel(dateLabel)
})

dateInputBox.addEventListener('mouseleave', () => {
  if (!dateInputFocus && !dateInput.value) {
    showLabel(dateLabel)
  }
})

timeInput.addEventListener('focus', () => {
  setInputFocus('timeInputFocus', true)
})

timeInput.addEventListener('blur', () => {
  setInputFocus('timeInputFocus', false)
  if (!timeInput.value || timeInput.value === '') {
    showLabel(timeLabel)
  }
})

timeInputBox.addEventListener('mouseover', () => {
  hideLabel(timeLabel)
})

timeInputBox.addEventListener('mouseleave', () => {
  if (!timeInputFocus && !timeInput.value) {
    showLabel(timeLabel)
  }
})

export {
  dateInput,
  timeInput
}
