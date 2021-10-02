/*
Author: Miguel Morel                                                                                                                       
Assignment: Name The Polygon 
Student ID: 800877651 
*/



function startProgram() {
    numberOfSides = prompt('Mighty Elusive Merlin asks for a number 1 and 10: ');


    validateEntry(numberOfSides);

}


function getShape(numberofSides) {

    switch (numberofSides) {
        case 1:
            alert('Monogon');
            break;
        case 2:
            alert('Digon');
            break;
        case 3:
            alert('Trigon');
            break;
        case 4:
            alert('Tetragon');
            break;
        case 5:
            alert('Pentagon');
            break;
        case 6:
            alert('Hexagon');
            break;
        case 7:
            alert('Heptagon');
            break;
        case 8:
            alert('Octagon');
            break;
        case 9:
            alert('Enneagon');
            break;
        case 10:
            alert('Decagon');
            break;
        default:
            alert("Please enter a valid input. Mighty Elusive Merlin asks for a number between 1 and 10: ");

            startProgram();

    }


}


function validateEntry(number) {
    if (number <= 10 && number != 0) {
        // Getting the absolute value 
        number = Math.abs(number);
        // Rounding up 
        number = Math.ceil(number);
        // Passing our number that matches our parameters
        getShape(parseInt(number));
    } else {
        alert("Please enter a valid input. Mighty Elusive Merlin asks for a number between 1 and 10: ");

        startProgram();
    }


    return;
}
