// Write a function `map` which takes an array and a function as parameters, and returns an array where each item is the item in the original array with the function applied to it.
//
// ```js
// var addOne = function (x) {
//   return x + 1;
// };
// map([1, 2, 3], addOne); // [2, 3, 4]
// ```
//
// __Stretch:__ The second parameter is an array of functions, apply all the functions one-by-one to the items in the array.
var map = function(array, func) {
  for(var i = 0; i< array.length; i++) {
    array[i] = func(array[i]);
  }
  return array;
}

map([1,2,3], function(x) {
  return x + 1;
});

map([1,2,3], function(x) {
  return x * x;
});

// Solution that doesn't alter the original array
var map = function(array, func) {
  var result = [];
  for(var i = 0; i< array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
}

map([1,2,3], function(x) {
  return x * x;
});

map(['hello', 'data', 'eat cheese', 'walking'], function(word) {
  return word.length;
});
