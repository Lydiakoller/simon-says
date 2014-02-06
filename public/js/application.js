$(document).ready(function(){
   $("#get_color").click(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/color",
      success: function(response){
         var color = response.color
         var cell = response.cell
         $("#" + cell).css('background-color', color);

         ;
      }
    })
   })
});
