$(document).ready(function(){
  $('#zero').click(function() {
    /* Act on the event */
    $('#result').text('0');
   alert();
  });
  $('#add5').click(function() {
    /* Act on the event */
    var result = Number($('#result').text());
    var answer = result + 5;
    $('#result').text(answer);
    alert();
  });
$('#add10').click(function() {
    /* Act on the event */
    var result = Number($('#result').text());
    var answer = result + 10;
    $('#result').text(answer);
    alert();
  });
$('#sub1').click(function() {
    /* Act on the event */
    var result = Number($('#result').text());
    var answer = result - 1;
    $('#result').text(answer);
    alert();
  });
});
