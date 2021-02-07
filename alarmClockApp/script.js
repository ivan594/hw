let timeParts1;
let timeParts2;

function setAlarm() {
    const alarmTime = document.getElementById("timeEntry").value;
    let timeParts = alarmTime.split(':');
    timeParts1 = timeParts[0];
    timeParts2 = timeParts[1];
    alert('Будильник установлен.');
}

function wakeUp() {
    let date = new Date();
    let hours = date.getHours();  
    let minutes = date.getMinutes(); 
    let aud = new Audio('melody.mp3');
    if (timeParts1 == hours && timeParts2 == minutes) {
        aud.play();
    } 
}

 setInterval(wakeUp, 1000);