/* Author: Miguel Morel                                                                                                                       
Assignment: Practice Activity - Build an Order Site
Student ID: 800877651  */


var $ = function(id) {
    return document.getElementById(id);
};

var totalPrice = 0;
var orderItems;



//declare the menu items and their prices
var items = ["Espresso", "Cappuccino"];
var message = ["Delicious espresso. Wanna try it?", "Delicious Cappuccino!"];

var menuPrices = ["1.95", "3.45"];

/**
 *  function to listen for the submit button
 */
window.onload = function() {

    var image = document.getElementsByTagName("IMG");


    for (var i = 0; i < image.length; i++) {

        image[i].onclick = updateOrderDisplay;
        console.log(image[i]);
    }

};

/**
 *  this function will be called when the submit button is clicked
 */

function updateOrderDisplay() {

    var selectedImage = this.id;
    // this.id is the id of the image that was clicked

    for (var i = 0; i < items.length; i++) {
        var itemCost;
        var elementName;
        var itemDetails;
        if (selectedImage == items[i]) {
            itemCost = menuPrices[i];
            elementName = items[i];
            itemDetails = message[i];
            document.getElementById("order").innerHTML += "<br>" + "$" + itemCost + " : " + elementName + " : " + itemDetails;
            totalPrice = totalPrice + parseFloat(itemCost);
            document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
        }
    }
}