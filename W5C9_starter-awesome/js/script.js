$(document).ready(function(){
	/*********** PUT THINGS HERE ****************/



	/*** STOP PUTTING THINGS HERE *****/
});

//Excercise 4
//Not sure where to start with this, or excercises 1-3 or 9.


//Excercise 5
// Using inputHello as my variable name that I will then use to store the content entered into the
// prompt box function. Once the content "hello world" is stored, I will output that content by
// using the alert popup box function.
$(document).ready(){
var helloworld_display = prompt('Type "hello world" into the box');
alert(helloworld_display);
};


//Excercise 6
// Using variable user and prompt box function to ask someone to enter their name where I then will
// store that value and use an alert popup box function, to output the entered value between two
// text strings.
$(document).ready(){
var greet1_input = prompt("Please enter your name");
alert("Hello " + greet1_input + " , welcome to the website.");
};


//Excercise 7
// Using variable user and prompt box function again to ask someone to enter their name where I then
// will store that value and use an alert popup box function. However, I will then use an else if
// statement conditional to verify which out I should give or not give.
$(document).ready(){
var greet1_input = prompt("Please enter your name");
if (greet1_input == "Alice" || "alice") {
document.write("Hello " + greet1_input + " , welcome to the website.");
} else if (greet1_input == "Bob" || "bob") {
document.write("Hello " + greet1_input + " , welcome to the website.");
} else if  (greet1_input == "Albert" || "albert") {
document.write("Hello " + greet1_input + " , welcome to the website.");
} else {
  document.write("You are not a recogized user.");
}
};


//Excercise 8
$(document).ready(){
var integerMax_input1 = prompt ("Please enter a value");
var integerMax_input2 = prompt ("Please enter another value");
if (integerMax_input1 > integerMax_input2) {
  document.write(integerMax_input1 + " is greater.");
}
else {
  document.write(integerMax_input2 + " is greater.");
}
};


//Excercise 10
//Trying to figure out how to control what variable numbers are entered into prompt boxes and also using if else to control the order in which the output is printed.
$(document).ready(){
var integerSort_input1 = prompt ("Enter number between 1 and 5");
var integerSort_input2 = prompt ("Enter number between 6 and 9");
var integerSort_input3 = prompt ("Enter number between 10 and 15");
if (integerSort_input1 <= 5) {
  {
  continue;
}
document.write(integerSort_input1); }
else if (integerSort_input2 <=10) {
  document.write(integerSort_input2);
}
else (integerSort_input3 <= 15) {
  document.write(integerSort_input3);
};
};


//Excercise 11
$(document).ready(){
function RockPaperScissors () {
  if //something
    continue;
    else if //something
      continue;
      else //
}
};


//Excercise 12
$(document).ready() {
  var factoral_input = prompt ("Please enter a number to be 'factorialed'(not a real word)");
factoral_display = {factoral_input * (factoral_input - 1);
document.write(factoral_display);};
};


//Excercise 13 Used a do while loop to have the asterick character print out for 5 lines, but could
//not yet get the lines to stuck for each time it did the loop.
$(document).ready(){
var i = 1;
do {
  document.write("*", "<br />");
i++;
}
while (i<=5);
};


//Excercise 14 Used a combination of variables entries via prompt pop-ups to get an input I could
//then multiply by its exponent number, however I have not yet made the loop itself successful.
$(document).ready(){
var base_input = prompt ("Enter number");
var exp_input = prompt("Enter an exponent");
for (i = 0; i<user; i++) {
  base_exp_display = (base_input*exp_input);
}
document.write(base_exp_display);
};


//Excercise 15
// I do not know how best to get the multiples of numbers, so I am starting by getting the code to
// do Continue Breaks so I can at least get print outs of Foo, Bar and FooBar. However, my code
// below causes my computer to crash as it creates an infinite loop???
$(document).ready(){
for (i=0; i<100; i++) {
  if (i=3) {
    document.write("Foo");
    continue;
  }
  else if (i=5) {
    document.write("Bar");
    continue;
  }
  else (i=15) {
    document.write("FooBar");
    continue;
  }
}
};
