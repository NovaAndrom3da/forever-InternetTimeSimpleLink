// copied from https://codeberg.org/foreverxml/beatclock/src/branch/main/src/window.js
// this function converts time (optionally specified) into beats
function beatify(millis = new Date()) {
  millis = (millis.getTime() + 3600000) % 86400000;
  let currentBeat = Math.floor(millis / 86400);
  let len = currentBeat.toString().length;
  return len === 1 ? "00" + currentBeat
    : len === 2 ? "0" + currentBeat
    : currentBeat.toString();
}

// remove beat convert to normal time
function debeatify(from_beat = beatify()) {
  //let date = ;
  return new Date(parseInt(from_beat) * 86400);
}

var subbeat;
var mainbeat;
function func_beat() {
 	document.querySelector("#beat").innerText = "@" + beatify();
  setTimeout(func_beat, 10000);
}

// calculate current beat, or show beat from URL
function loadbeat() {
  let url = window.location.search;
  if (url === "") {
    document.querySelector("#subbeat").innerText = "Synced with current time";
    setTimeout(func_beat, 10);
    return;
  }
  url = url.splice(-3);
  let time = debeatify(url);
  subbeat.innerText = "";
  mainbeat.innerText = "";
  subbeat.innerText += "is equal to " + time.getHours() + ":" + time.getMinutes() + " local time";
  mainbeat.innerText += "@" + beatify(time);
};

setTimeout(function() {
  subbeat = document.querySelector("#subbeat");
  mainbeat = document.querySelector("#beat");
  loadbeat();
}, 250);

