/*
Author: Miguel Morel 
Assignment: Activity #16
Student ID: 800877651
*/

$(document).ready(function(){
    //  setting the variables
var id ='82407828@N07'
var tags = 'vectacorpbuilding';
var url = "https://api.flickr.com/services/feeds/photos_public.gne?id="+  id +'&format=json&jsoncallback=?&tags=' + tags;
// For debugging
//console.log(url);
// Fetches the data from the url
$.getJSON(url, function(input) { 
    var html = ""; 
         $.each(input.items, function(i, item){ 
        html += "<a href=" +  item.media.m + " data-lightbox=" + "building " + "data-title=" + item.title + ">" + "<img src=" + item.media.m + ">" +"</a>"; 
    }); 
    // displays the data
    $("#new_building").html(html); 
}); 
});