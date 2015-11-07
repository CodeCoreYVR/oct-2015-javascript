// 1. Write a function that takes one parameter, a person's age. If the person is older than 50, return `'old'`. Otherwise, return `'young'`.
//
var person = function(age) {
  if(age > 50) {
    return "old";
  } else {
    return "young";
  }
}

console.log(person(51));
console.log(person(41));


// 2. Write a function `forEach` that takes two parameters, an array and a function. It should call the function on each item in the array.
//


var forEach = function(array, func) {
  for(var i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
  return array;
}

var myArray = [1,2,3,4,5];
console.log(forEach(myArray, function(x){ return x + 1}));

myArray = [1,2,3,4,5];
console.log(forEach(myArray, function(x){ return x - 1}));

// 3. Write a function called `sayLater` that takes one parameter, a string. It should log the string to the console 5 seconds later.
var sayLater = function(string) {
  setTimeout(function(){
    console.log(string);
  }, 5000);
}

sayLater("Hello Friday!");


// 4. [Stretch] Research how to loop over an object. Use this to count the number of properties that the `window` object has.

Object.getOwnPropertyNames(window).length;

var count = 0;
for(var k in window) {
  count++;
}
console.log(count);
