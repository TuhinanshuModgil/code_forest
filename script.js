let timerClockMin = 1;
let timerClockSec = 0;
let timeRemaining = timerClockMin * 60;
let timerOn = false;
let timerClock = document.getElementsByClassName("timer-clock");

function clockUpdate() {
  timerClock[0].innerHTML = `${
    timerClockMin > 9 ? timerClockMin : "0" + timerClockMin
  }:${timerClockSec > 9 ? timerClockSec : "0" + timerClockSec}`;
}

clockUpdate();

function timerAdd() {
  if (timerClockMin < 120) {
    timerClockMin += 30;
    timeRemaining = timerClockMin * 60;
    clockUpdate();
  } else {
    return;
  }
}

function timerSubtract() {
  if (timerClockMin > 30) {
    timerClockMin -= 30;
    timeRemaining = timerClockMin * 60;
    clockUpdate();
  } else {
    return;
  }
}
let timerSetInterval;
function startTimer() {
  timerSetInterval = setInterval(timerRun, 1000);
  console.log("seting");
  timerOn = true;
}

function stopTimer() {
  clearInterval(timerSetInterval);
  timerOn = false;
  clockUpdate();
}

function timerRun() {
  timeRemaining--;
  let min = Math.floor(timeRemaining / 60);
  // min = min>9?min:'0'+minsec
  let sec = timeRemaining % 60;
  // sec = sec>9?sec:'0'+sec;
  timerClock[0].innerHTML = `${min > 9 ? min : "0" + min}:${
    sec > 9 ? sec : "0" + sec
  }`;

  if(min === 0 & sec == 0)
  {
      stopTimer();
  }
  
}
