// console.log("I'm in a separate file");

// var name = prompt("What is your name");

// alert(name);

// confirm will show you a pop up message with "ok" and "cancel" options
// if the user clicks on "ok", the result will be true
// if the user clicks on "cancel", the result will be false
// var result = confirm("Are you sure " + name + "?");
// console.log(result);

// var myMessage = "Hello " + name;
//
// alert(myMessage);

// Slide 51/52 Exercises
// var enter = confirm("Do you want to enter the safe?");
//
// if(enter) {
//   var password = prompt("What is the secret password");
//   if(password === "opensesame") {
//     alert("714");
//   } else {
//     alert("Wrong!");
//   }
// } else {
//   alert("Ok, Goodbye then.")
// }

// Slide 53 Exercise, password checker
// var password = prompt("Decide a password");
//
// if (password.length > 12) {
//   alert("too long");
// } else if(password.length < 8) {
//   alert("too short");
// } else {
//   alert("Sure that works!");
// }

// While Loop
// var x = 0;
//
// while (x <= 100) {
//   console.log(x);
//   x++; // x += 1;
// }

// var i = 10;
//
// while(i > 5) {
//   i -= 1;
// }
//
// console.log(i * 2);

// var x = 0;
//
// while(x <= 100) {
//   if(x % 2 === 0) {
//     console.log(x);
//   }
//   x += 1;
// }

// var beer = 100;
//
// while(beer > 0) {
//   console.log(beer + " bottles of beer on the wall. " + beer +
//                 " bottles of beer.");
//   beer -= 1;
//   console.log("take one down, pass it around, " + beer +
//                 " bottles of beer on the wall.");
// }

// for(var i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// for(var beer = 100; beer > 0; beer -= 1) {
//   console.log(beer + " bottles of beer on the wall. " + beer +
//                 " bottles of beer.");
//   console.log("take one down, pass it around, " + (beer - 1) +
//                 " bottles of beer on the wall.");
// }

// Find the first number that is divisible by 3, 4 and 5
// var x = 1;
// while (x <= 100) {
//   if(x % 3 == 0 && x % 4 == 0 && x % 5 == 0) {
//     console.log(x);
//     break;
//   }
//   x += 1;
// }
// var result = 0;
//
// for (var i = 5; i < 10; i += 1){
//   result += i;
//   if (i % 3 == 0) {
//     break;
//   }
// }
// console.log(result);
// var number = parseInt(Math.random() * 100) + 1;
//
//
// while(true) {
//   var guess = prompt("Guess a number between 0 and a 100");
//   guess = parseInt(guess);
//   if(guess > number) {
//     alert("Guess lower");
//   } else if(guess < number) {
//     alert("Guess higher");
//   } else {
//     alert("Good job!");
//     break;
//   }
// }

// var names = ["Jim", "Tom", "Jason", "Brian"];
//
// for(var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// var array = [0, 5, 6, -12];
// var total = 0;
//
// for(var i = 0; i < array.length; i++) {
//   total += array[i];
// }
//
// console.log(total);


// var array = ["apple", "dog", "computer", "cup"];
//
// for(var i = 0; i < array.length; i++) {
//   console.log(array[i] + " has " + array[i].length + " characters");
// }

// var greeting = function(name) {
//   return "Hello " + name;
// }
//
// greeting("tam");

// var insult = function(name){
//   console.log(name + ", you nincompoop");
// }
//
// insult("Tam");

// var increment = function(number) {
//   return number + 1;
// }
//
// console.log(increment(5));

// var doubleArray = function(array) {
//   for(var i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2;
//   }
//   return array;
// }
// var array = [1,2,3,4,5];
// console.log(doubleArray(array));
// console.log(array);

var me = {name: "Tam", age: 50};

var details = function(obj) {
  console.log(obj.name + " is " + obj.age + " years old");
}

details(me);

var abc = "Hello CodeCore Students";

var lengths = function(sentence) {
  var words  = sentence.split(" ");
  var result = {};
  for(var i = 0; i < words.length; i++) {
    result[words[i]] = words[i].length;
  }
  return result;
}

console.log(lengths(abc));












//
