/*
Author: Miguel Morel                                                                                                                       
Assignment: Simple Web-based Interaction 
Student ID: 800877651 
*/


//document.getElementById("btn").addEventListener(onclick, alert('Script is running'));

function helloUser() {

    let name = prompt("What's your name? ");
    let message = "Greetings " + name;
    let status = prompt("How are you doing today? ");
    let currentTime = new Date().toLocaleTimeString();
    let currentDate = new Date().toLocaleDateString();
    const companyName = "mmorel Productions";
    document.getElementById("helloUser").innerHTML = "Glad to hear that you are " + status + "! " + message + ". The current time and date is: " + currentTime + " || " + currentDate + "\n\n" +
        companyName + " welcomes you today!";



}

function calculateSumOfTwoNumbers() {
    let x = prompt("Enter an number: ");
    let y = prompt("Enter a second number: ")
    let sum = parseFloat(x) + parseFloat(y);
    document.getElementById("calculateSumOfTwoNumbers").innerHTML = "The sum of the numbers you selected is: " + sum;
}

function calculateMilesPerGallon() {

    let miles = prompt("How many miles have you traveled? ");
    let gallon = prompt("How many gallons did your car burn? ");
    let mpg = parseFloat(miles) / parseInt(gallon);
    document.getElementById("calculateMilesPerGallon").innerHTML = "Your car\'s Miles Per Gallon is : " + mpg + " mile(s)/gallon";
}

function numberToHex() {
    let number = prompt("Enter the input to convert to HEX: ");
    number = parseInt(number);
    let hexString = number.toString(16);
    if (typeof(hexString) == 'string') {
        hexString = hexString.toUpperCase();
    }
    document.getElementById("numberToHex").innerHTML = "The HEX value of your number is: " + hexString + " ";
}

function convertFahrenheitToCelsius() {
    let tempF = prompt("Enter the temperture in Fahrenheit: ");
    var tempinC = (parseInt(tempF) - 32) * 5 / 9;
    document.getElementById("convertFahrenheitToCelsius").innerHTML = "The Temp in Celesius is: " + tempinC + " C";
}