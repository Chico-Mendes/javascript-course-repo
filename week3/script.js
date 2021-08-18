var offset = 0;
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
    //convertTime();
}

function convertTime(){
    var myDate = new Date();
    var hour = myDate.getHours() + offset;
    var min = myDate.getMinutes();
    var sec = myDate.getSeconds();

    if(hour > 23) hour -= 24;
    else if(hour < 0) hour += 24;

    var time = ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);

    setTimeout(convertTime,1000);
    
    document.getElementById("result_time").innerHTML = time;
}
//readForm();