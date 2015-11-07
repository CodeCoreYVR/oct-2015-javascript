setInterval(function(){
  console.log("Hello World");
}, 1000);

// Make a counter using `setInterval`. Count from 1 up, every second.
//
// __Stretch:__ Create two counters, one for even numbers and one for odd. Run them at the same time.
var i = 0;

setInterval(function(){
  console.log(i);
  i++;
}, 1000);

// Stretch

var i = 0;
var x = 1;

setInterval(function(){
  console.log(i);
  i += 2;
}, 1000);

setInterval(function(){
  console.log(x);
  x += 2;
}, 1000);



console.log("Hello World");
for(var i = 0; i < 100000000000; i++) {}
console.log("GoodBye");
