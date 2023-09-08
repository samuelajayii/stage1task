const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
let day = dayName[date.getDay()];
document.getElementById("day").innerHTML = day;

let milliSeconds = date.getUTCMilliseconds();
document.getElementById("time").innerHTML = milliSeconds;