var isEven = function (x) { return x % 2 == 0; };

var filter = function(array, func) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    if(func(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}


filter([1, 2, 3, 4], isEven); // => [2, 4]
