const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
var timerUpdate = function() {
  setInterval(timer, 1000)
}
function stopTimer() {
  clearInterval(timerUpdate)
}
var writeMinutes = 0
var writeSeconds = 0

btnStart.addEventListener('click', timerUpdate)

btnStop.addEventListener('click', stopTimer)

function timer() {
  if (writeSeconds <= 60) {
    writeSeconds++
  } else if (writeSeconds = 60) {
    writeSeconds = 0
    writeMinutes++
  }
  if (writeSeconds < 10) {
    seconds.innerText = `${"0" + writeSeconds.toString()}`
  } else {
    seconds.innerText = `${writeSeconds.toString()}`
  }
  if (writeMinutes < 10) {
    minutes.innerText = `${"0" + writeMinutes.toString()}`  
  } else {
    minutes.innerText = `${writeMinutes.toString()}`  
  }
}