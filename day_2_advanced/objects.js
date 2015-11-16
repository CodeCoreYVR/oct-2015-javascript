var Person = function(name) {
  this.name = name;
}

Person.prototype.greeting = function() {
  console.log("Hello " + this.name);
}

var person = new Person("Tam");
person.age = 32;

var person2 = new Person("John");

console.log(person);
