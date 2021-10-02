/*
Author: Miguel Morel                                                                                                                       
Assignment: Calculator Try 
Student ID: 800877651 
*/


//document.getElementById("btn").addEventListener(onclick, alert('Script is running'));
function Add() {
    var test = document.querySelector('#firstValue').innerHTML;
    console.log(test);
    var firstValue = document.getElementById("firstValue").innerHTML;
    var secondValue = document.getElementById("secondValue").innerHTML;
    var total = firstValue + secondValue;
    v = document.getElementById("Answer");
    console.log(firstValue);
    console.log(secondValue);
    console.log(total);
    v.innerHTML = total;
}

function Subtract() {
    var firstValue = document.getElementById("firstValue").innerHTML;
    var secondValue = document.getElementById("secondValue").innerHTML;
    var total = firstValue - secondValue;
    document.getElementById("Answer").innerHTML = total;
}

function Multiply() {

    var firstValue = document.getElementById("firstValue").innerHTML;
    var secondValue = document.getElementById("secondValue").innerHTML;
    var total = firstValue * secondValue;
    document.getElementById("Answer").innerHTML = total;
}

function Divide() {
    var firstValue = document.getElementById("firstValue").innerHTML;
    var secondValue = document.getElementById("secondValue").innerHTML;
    var total = firstValue / secondValue;
    document.getElementById("Answer").innerHTML = total;
}