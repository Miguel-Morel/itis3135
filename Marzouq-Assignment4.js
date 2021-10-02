/*
Author: Murtadha Marzouq
Class: ITIS 3135
Assignment: 4
IMPLEMENTED METHODS:  THE 4 BASIC MATH FUNCTIONS - + * / WITH A BONUS ONE 
*/


//IMPLEMENTING THE METHODS FOR THE HTML FILE FOR THE USER TO USE:

// SUBTRACT: THIS WILL ENABLE THE SUBTRACT FUNCTIONALITY

function subtract() {
	//GETTING THE VALUE OF THE VARIABLE
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		//DOING SOME ADVANCED CALCULUS
		prevCalc = num;
		document.frmCalc.txtNumber.value = "";
		calc = "subtraction";
	}
}

// SQUAREROOT: THIS WILL ENABLE THE SQUAREROOT FUNCTIONALITY

function sqrtrt() {
	//GETTING THE VALUE OF THE VARIABLE
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		//DOING SOME ADVANCED CALCULUS
		document.frmCalc.txtNumber.value = Math.sqrt(num);
	}
}

//MULTIPICATION: THIS WILL ENABLE THE MULTIPICATION FUNCTIONALITY
function multiply() {
	//GETTING THE VALUE OF THE VARIABLE
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		//DOING SOME ADVANCED CALCULUS
		prevCalc = num;
		document.frmCalc.txtNumber.value = "";
		calc = "multipication";
	}
}


//DIVISION:
function division() {
	//GETTING THE VALUE OF THE VARIABLE
	var num = parseFloat(document.frmCalc.txtNumber.value);
	//CHECKING FOR ERRORS
	if (!(isNaN(num))) {
		//DOING SOME ADVANCED CALCULUS
		prevCalc = num;
		document.frmCalc.txtNumber.value = "";
		calc = "division";
	}
}



//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
	document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		num--;
		document.frmCalc.txtNumber.value = num;
	}
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		prevCalc = num;
		document.frmCalc.txtNumber.value = "";
		calc = "Add";
	}
}



//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
	var num = parseFloat(document.frmCalc.txtNumber.value);
	if (!(isNaN(num))) {
		var total;
		if (calc == "Add") {
			total = prevCalc + num;
			document.frmCalc.txtNumber.value = total;
			//ADDING IF ELSE STATEMENTS, ALTHOUGH A SWITCH STATEMENT WOULD HAVE BEEN BETTER
		} else if (calc == "subtraction") {
			total = prevCalc - num;
			document.frmCalc.txtNumber.value = total;
		} else if (calc == "multipication") {
			total = prevCalc * num;
			document.frmCalc.txtNumber.value = total;
		} else if (calc == "division") {
			total = prevCalc / num;
			document.frmCalc.txtNumber.value = total;
		}
	}

}


function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}