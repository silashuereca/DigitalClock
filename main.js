
setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";
    let clock = document.getElementById('clock');

    if (hours >= 12) {
        period = "PM"
    }
    if(hours > 12) {
        hours = hours - 12;
    }
    if(seconds < 10){
        seconds = '0' + seconds
    }
    if(minutes < 10) {
        minutes = "0" + minutes
    }

    let clockTime = `${hours} : ${minutes} : ${seconds} : ${period}`
    
    clock.innerText = clockTime;

}, 1000)