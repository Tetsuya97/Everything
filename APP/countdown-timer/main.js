const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "2021-12-31 00:00:00";

function countdown() {
  const newYearsDate = new Date(newYears);
  const today = new Date()
  const limit = newYearsDate - today;

  const sec = Math.floor(limit / 1000) % 60;
  const min = Math.floor(limit / 1000 / 60) % 60;
  const hours = Math.floor(limit / 1000 / 60 / 60) % 24;
  const days = Math.floor(limit / 1000 / 60 / 60 / 24);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = min;
  secondsEl.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);
