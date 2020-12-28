var clock = document.getElementById("clock");

var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

var hourSeperator = document.getElementById("hourSeperator");
var christmas = new Date("2021-01-01");

function calculate() {
    var startDate = new Date();

    var dateDiff = christmas.getTime() - startDate.getTime();
    var seconds = Math.floor((dateDiff / 1000) % 60);
    var diffHrs = Math.floor((dateDiff % 86400000) / 3600000);
    var diffMins = Math.round(((dateDiff % 86400000) % 3600000) / 60000);

    if (diffHrs == 0) {
        hoursElement.remove();
        hourSeperator.remove();
    } else {
        hoursElement.innerText = (diffHrs < 10) ? "0" + diffHrs : diffHrs;
    }

    secondsElement.innerText = (seconds < 10) ? "0" + seconds : seconds;
    minutesElement.innerText = (diffMins < 10) ? "0" + diffMins : diffMins;
}

window.setInterval(calculate, 100);