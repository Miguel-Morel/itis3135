/*Author: Miguel Morel 
    Assignment: Activity #14
    Student ID: 800877651 */

$(document).ready(function() {
    $("#nav_list a").click(function(){
        
        var url = $(this).attr("title") + ".json"; 
         
        $.getJSON(url, function(data){ 
            
            $.each(data, function(){ 
                $.each(this, function(key, value){ 
                    
                    $("#content h1").html(value.title); 
                    $("#content h2").html(value.month);
                    $("#content h3").html(value.speaker);
                    $("#content img").attr("src", value.image);
                    $("#content p").html(value.text);
                });
            });
        });
    });
	
}); 