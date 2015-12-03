// Exercise 1
// var numbers = prompt("Give me a list of numbers: ");
//
// numbers = numbers.split(" "); // array of numbers
//
// var sum = 0;
//
// for(var i = 0; i < numbers.length; i++) {
//   sum += parseInt(numbers[i]);
// }
//
// alert(sum);

// Exercise 2
var numbers = prompt("Give me a list of numbers: ");

numbers = numbers.split(" "); // array of numbers

var sum = 0;
var product = 1;

for(var i = 0; i < numbers.length; i++) {
  sum     += parseInt(numbers[i]);
  product *= parseInt(numbers[i]);
}
var avg = sum / numbers.length;
alert("The product of the numbers is: " + product + " and the average \
        is: " + avg);
