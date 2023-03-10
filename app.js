let hoursArray = [
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];

let handSecs = document.querySelector(".sec");
let handMins = document.querySelector(".min");
let handHrs = document.querySelector(".hrs");

function secsMovement() {
  let date = new Date();
  const secs = date.getSeconds();
  let secDegrees = secs * 6;
  handSecs.style.transform = `rotate(${secDegrees}deg)`;

  setTimeout(secsMovement, 1000);
}

function minsMovement() {
  let date = new Date();
  const mins = date.getMinutes();
  let minDegrees = mins * 6;
  handMins.style.transform = `rotate(${minDegrees}deg)`;

  setTimeout(minsMovement, 1000);
}

function hoursMovement() {
  let date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  let minDegrees = mins * 6;
  let hourDegrees = hoursArray[hours] * 30 + mins * 0.5;
  handHrs.style.transform = `rotate(${hourDegrees}deg)`;

  setTimeout(hoursMovement, 1000);
}

secsMovement();
minsMovement();
hoursMovement();
