let hour = document.getElementById("hrs");
let min = document.getElementById("min");
let secs = document.getElementById("sec");
let mili = document.getElementById("milsec");

setInterval(() => {
  let currentTime = new Date();
  // console.log(currentTime);
  hour.innerHTML = currentTime.getHours();

  min.innerHTML = currentTime.getMinutes();

  secs.innerHTML = currentTime.getSeconds();
    mili.innerHTML = currentTime.getMilliseconds();
}, 1000);
