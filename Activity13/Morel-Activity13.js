/*

Author: Miguel Morel 
Assignment: Activity #13
Student ID: 800877651


*/


/***************************  Changing the original  Function  ***************************/
$(document).ready(function() {

    //  CORS forwarding security issue proved to be a problem. 
    // using an Apache web server helped locally
    $.getJSON("team.json", function(data){
        // Populate the team members
        $.each(data, function(){

          $.each(this, function(key , value){
            // Get the team member's and their information
            $("#team").append(
                "Name: " + value.name + "<br>" +
                "Title: " + value.title + "<br>" +
                "Bio: " + value.bio + "<br><br>"
            )

          });

        });

    });
});