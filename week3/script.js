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

    /*if(hour > 23) hour -= 24;
    else if(hour < 0) hour += 24;*/
}

function setRotation(element, rotationRatio){
    element.style.setProperty(`--rotation`, rotationRatio * 360);
}
readForm();