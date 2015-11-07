var Person =  function() {
  this.age = 55;
}

var person1 = new Person();
person1.name = "Tam";

var person2 = new Person();

console.log(Object.keys(person1).length);
console.log(Object.keys(person2).length);
