var myFunction = function(){
  console.log(this);
}

// `this` inside myFunction will be Window
myFunction();
myFunction.call();

var myObject = {a: 1, b: 2};

// `this` inside myFunction will be the object: myObject
myFunction.call(myObject);
