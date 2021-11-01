var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};

// This function will update the calories for the day   
function updateCalorie(){
    var day = document.getElementsByName('day');
    var  cal = document.getElementById("calorie").value;

    var selectedDay = "";
    day.forEach((day) => {
        if (day.checked) {
            selectedDay = day.value;
        }
    })


          
    console.log(selectedDay + " " + cal);
    if (isNaN(cal) || cal === ""){
        alert("Please enter a valid number");
      
    }
    else{
        
        switch (selectedDay) {
            case "monday":
                calories[0] = cal;
                break;
            case "tuesday":
                calories[1] = cal;
                break;
            case "wednesday":
                calories[2] = cal;
                break;
            case "thursday":
                calories[3] = cal;
                break;
            case "friday":
                calories[4] =   cal;
                break;
            case "saturday":
                calories[5] =   cal;
                break;
            case "sunday":
                calories[6] = cal;
                break;
            default:
                alert("Please enter a valid day");
        }
    
   
    alert(calories.toString());
    document.getElementById("calorie").value = "";
    }

}


function showAverageCalories(){
    var average = 0;
    for (var i = 0; i < calories.length; i++) {
        average += calories[i];
    }
    average = parseFloat(average) / 7;
    document.getElementById("average").style.color = "green";
    document.getElementById("average").style.backgroundColor = "transparent";

    document.getElementById("average").value = "Your Average consumed calorie is " + average;
}



function showMax(){

    var day = document.getElementsByName('day');
    var  cal = document.getElementById("calorie").value;

    var selectedDay = "";
   
    var max = 0;
    for (var i = 0; i < calories.length; i++) {
        if (calories[i] > max) {
            max = calories[i];
            selectedDay = days[i];
        }
    }
    

    // This will associate the max value with the day
    document.getElementById("showMax").innerHTML = "Your maximum consumed calorie is " + max + " on " + selectedDay;
    }



 