let clock = document.getElementById("clock");
let deadline = new Date("Jun 10, 2023 23:59:59").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let time = deadline - now;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  document.getElementById("clock").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  if (time < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Time Is Up!!⌛";
  }
}, 1000);
