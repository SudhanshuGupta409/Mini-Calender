let monthEl = document.getElementById("month");
let dayEl = document.getElementById("day");
let dateEl = document.getElementById("date");
let yearEl = document.getElementById("year");
// let timeEl = document.getElementById("time");

const date = new Date();

monthEl.innerText = date.toLocaleString("en", {month: "long"});
dayEl.innerText = date.toLocaleString("en", {weekday: "long"});
yearEl.innerText = date.getFullYear();
dateEl.innerText = date.getDate();


// timeEl.innerText = date.toLocaleString("en", {timeStyle: "short"});
// timeEl.innerText = date.toLocaleString("en", {timeStyle: "long"});