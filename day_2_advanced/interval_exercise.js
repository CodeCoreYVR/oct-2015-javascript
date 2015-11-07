//
// Use `setInterval` to log '.' to the screen every 1 second. Stop after 10 seconds have passed.
// _(Hint: Use `setTimeout` to stop things after 10 seconds)_
//
// __Stretch:__ Build a blast-off countdown using `setInterval`.
//   *10 9 8 7 6 5 4 3 2 1 Blast Off!*

var interval = setInterval(function(){
  console.log(".");
}, 1000);

setTimeout(function(){
  clearInterval(interval);
}, 11000);

// Stretch
var count = 10;

var countDown = setInterval(function(){
  console.log(count + "...");
  count -= 1;
}, 1000);

setTimeout(function(){
  clearInterval(countDown);
  console.log("Blast Off!!!");
}, 11000);
