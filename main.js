var interVal;
var number = 0;
var clockRunning = false;
var minute, second = 0;
var clock = {
    plus: function() {
        number++;
        $("#time").text(clock.timeConverter(number));
        
    },
    minus: function() {
        if(number > 0) {
            number--;
            $("#time").text(clock.timeConverter(number));  
        } else {
            alert("Number can't be negative");
        }  
    },
    start : function() {
        if(!clockRunning) {
            clockRunning = true;
            interVal = setInterval(() => {
                if(number > 0) {
                    number --;
                    $("#time").text(clock.timeConverter(number));
                }
            }, 1000);
        }
    },
    clearTime: function(){
        clearInterval(interVal);       
        clockRunning = false;
    },
    reset: function(){
        clock.clearTime();
        number = 0;
        $("#time").text("00:00");
    },
    timeConverter: function(t) {
        minute = Math.floor(t / 60);
        second = t - minute * 60;
        if(minute < 10) {
            minute = "0" + minute;
        }else if (minute === 0) {
            minute = "00";
        }
        if(second < 10) {
            second = "0" + second;
        }
        return (minute + ":" + second);
    }
}

//button function
$("#start").on("click", clock.start);
$("#stop").on("click", clock.clearTime);
$("#reset").on("click", clock.reset);
$("#plus").on("click", clock.plus);
$("#minus").on("click", clock.minus);