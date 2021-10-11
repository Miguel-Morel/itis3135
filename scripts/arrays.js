var person = [];
var salary = [];
averageSalary = 0;
highestsalary = 0;

var $ = function(id) { return document.getElementById(id); };

function showResult() {
    for (var j = 0; j < salary.length; j++) {
        averageSalary += parseInt(salary[j]);
        if (salary[highestsalary] < salary[j])
            highestsalary = j;
    }
    averageSalary = (averageSalary / salary.length);
    $("results").innerHTML = "<h2>Results</h2>Average salary: " + averageSalary + "<br />";
    $("results").innerHTML += "High salary name: " + person[highestsalary] + " with a salary amount of " + salary[highestsalary];

}

function displaySalary() {

    var tables = "";
    for (var j = 0; j < salary.length; j++) {

        tables += "<tr><td>" + person[j] + "</td><td>" + salary[j] + "</td></tr>";

    }


    $("results_table").innerHTML = "<h2>Results</h2>" + tables;

}



function addSalary() {



    // Date Validation Number 7

    if ($("name").value == "" || $("salary").value < 0 || $("salary").value > 100 || isNaN(parseInt($("salary").value))) {
        alert("The entered name or value is invalid! Please check your input");
    } else {

        person.push($("name").value);
        salary.push($("salary").value);
        // Number 8. Focus on the name Field
        $("name").focus();
        var option = document.createElement('option');
        option.text = $("name").value;
        $('employees').add(option, 0);
        console.log($("name").value)

    }

}

// To initilize the javascript 
window.onload = function() {
    $("Employee").onselectionchange = showResult;
    $("add").onclick = addSalary;
    // $("display_salary").onclick = displaySalary;
};


// Make a dropdown menu where you can select an employee by name