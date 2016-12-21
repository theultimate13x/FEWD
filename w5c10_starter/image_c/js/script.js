
$(document).ready(function(){
var images = ["https://dummyimage.com/300", "https://dummyimage.com/200", "https://dummyimage.com/500", "https://dummyimage.com/100" ,"https://dummyimage.com/400" ];
var current_image = 0;
$("#next").click(function() {
  current_image = current_image + 1;
  $("#main_image").attr("src", images[current_image]);
});
$("#prev").click(function() {
  current_image = current_image - 1;
  $("#main_image").attr("src", images[current_image]);
});
//$("#next").click(function() {
  //current_image = current_image + 1;
  //$('#main_image').attr('src', images [current_image]);

  });
