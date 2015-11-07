var myFunction = function(func) {
  func();
  func();
  func();
}

var func1 = function() {
  console.log("Hello World");
}

myFunction(func1);


// Write a function `call` which takes a number and a function as parameters, and returns the result of calling the function on the number.
//
// ```js
// var doubleIt = function (x) {
//   return 2 * x;
// };
// call(5, doubleIt); // => 10
// ```

var doubleIt = function (x) {
  return 2 * x;
};

var call = function(num, func) {
  return func(num);
}

call(5, doubleIt);

// Stretch
var call = function(num, func, times) {
  return times * func(num);
}

call(5, doubleIt, 2);
