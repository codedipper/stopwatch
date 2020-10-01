let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped";

function stopWatch(){
    milliseconds++;

    if (milliseconds / 10 === 1){
        milliseconds = 0;
        seconds++;

            if (seconds / 60 === 1){
                seconds = 0;
                minutes++;
                
            if (minutes / 60 === 1){
                minutes = 0;
                hours++;
            }
        }
    }

    if (milliseconds < 10){
        displayMilliseconds = milliseconds.toString();
    } else {
        displayMilliseconds = milliseconds;
    }

    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    let time = document.querySelector("#display")
    time.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

function startStop(){
    if (status === "stopped"){

        interval = window.setInterval(stopWatch, 100);
        document.querySelector("#startStop").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.querySelector("#startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
            
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector("#display").innerHTML = "00:00:00:0";
    document.querySelector("#startStop").innerHTML = "Start";
}
