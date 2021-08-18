var offset = 0;
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-min-hand]');
const secondHand = document.querySelector('[data-sec-hand]');

setInterval(showTime, 1000);

function readForm(){
    var radioButtons = document.getElementsByName("tz");
    var radioButtonValue = "PT";

    for(var i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked == true){
            radioButtonValue = radioButtons[i].value;
            break;
        }
    }

    switch(radioButtonValue){
        case "PST":
            offset = -8;
            break;
        case "EST":
            offset = -5;
            break;
        case "CEST":
            offset = 1;
            break;
        case "AEST":
            offset = 10;
            break;
        default:
            offset = 0;
            break;
    }
    showTime();
}

function showTime(){
    var myDate = new Date();
    var secondRatio = myDate.getSeconds()/60;
    var minuteRatio = (myDate.getMinutes() + secondRatio) / 60;
    var hourRatio = (myDate.getHours() + offset + minuteRatio) / 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);

    // digital
    var hour = myDate.getHours() + offset;
    var min = myDate.getMinutes();
    var sec = myDate.getSeconds();

    if(hour > 23) hour -= 24;
    else if(hour < 0) hour += 24;

    var time = ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
    
    document.getElementById("digital clock").innerHTML = time;
}

function setRotation(element, rotationRatio){
    element.style.setProperty(`--rotation`, rotationRatio * 360);
}

function setDigital(){
    var digital = document.getElementById("digital clock");
    var analogue = document.getElementById("clock");
    digital.style.display = "flex";
    analogue.style.display = "none";
}
function setAnalogue(){
    var digital = document.getElementById("digital clock");
    var analogue = document.getElementById("clock");
    digital.style.display = "none";
    analogue.style.display = "flex";
}
setAnalogue();
readForm();