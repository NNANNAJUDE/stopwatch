//variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Initialize time value

let seconds = 0;
let minutes = 0;
let hours = 0;

//Initialize variables for a leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval timer status

let timerInterval = null;
let timerStatus = "stopped";

//Stopwatch function

function stopWatch() {
    
    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if (minutes / 60 ===1) {
            minutes = 0;
            hours ++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}

//functions for start and stop button;

startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id= "pause"></i>`;
        timerStatus = "started";
    }else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id= "play"></i>`;
        timerStatus = "stopped";
    }
});

//resetBtn function

resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);

    leadingSeconds = "00";
    leadingMinutes = "00";
    leadingHours = "00";

    document.getElementById('timer').innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
})