/*
Author: Miguel Morel                                                                                                                       
Assignment: Calculator Try 
Student ID: 800877651 
*/

function Add() {
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (!(isNaN(parseFloat(firstValue))) && !(isNaN(parseFloat(secondValue)))) {
    var total = parseFloat(firstValue) + parseFloat(secondValue);
    alert("The total is: " +total)}
}


function Subtract() {
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (!(isNaN(parseFloat(firstValue))) && !(isNaN(parseFloat(secondValue)))) {
        var total = parseFloat(firstValue) - parseFloat(secondValue);
        alert("The total is: " +total)}
}

function Multiply() {
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (!(isNaN(parseFloat(firstValue))) && !(isNaN(parseFloat(secondValue)))) {
        var total = parseFloat(firstValue) * parseFloat(secondValue);
        alert("The total is: " +total)}
}

function Divide() {
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (!(isNaN(parseFloat(firstValue))) && !(isNaN(parseFloat(secondValue)))) {
        var total = parseFloat(firstValue) / parseFloat(secondValue);
        alert("The total is: " +total)}
}