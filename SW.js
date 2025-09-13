let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");
let msecEl = document.getElementById("msec");

let startbttn = document.getElementById("startbutton");
let resetbttn = document.getElementById("resetbutton");

let msec = 0, secs = 0, mins = 0;
let timeId = null;
let isRunning = false;
let isPaused = false;

startbttn.addEventListener("click", function () {
  if (!isRunning) {
    timeId = setInterval(timeUpdate, 10);
    isRunning = true;
    isPaused = false;
    startbttn.textContent = "Stop";
    startbttn.style.setProperty("--clr", "red");
  } 
  else if (isRunning && !isPaused) {
    clearInterval(timeId);
    isPaused = true;
    startbttn.textContent = "Resume";
    startbttn.style.setProperty("--clr", "green");
  } 
  else if (isRunning && isPaused) {
    timeId = setInterval(timeUpdate, 10);
    isPaused = false;
    startbttn.textContent = "Stop";
    startbttn.style.setProperty("--clr", "red");
  }
});

resetbttn.addEventListener("click", function () {
  clearInterval(timeId);
  msec = secs = mins = 0;
  minsEl.textContent = "00";
  secsEl.textContent = "00";
  msecEl.textContent = "00";

  isRunning = false;
  isPaused = false;
  startbttn.textContent = "Start";
  startbttn.style.setProperty("--clr", "green");
});

function timeUpdate() {
  msec++;
  if (msec === 100) {
    secs++;
    msec = 0;
  }
  if (secs === 60) {
    mins++;
    secs = 0;
  }

  minsEl.textContent = mins < 10 ? "0" + mins : mins;
  secsEl.textContent = secs < 10 ? "0" + secs : secs;
  msecEl.textContent = msec < 10 ? "0" + msec : msec;
}