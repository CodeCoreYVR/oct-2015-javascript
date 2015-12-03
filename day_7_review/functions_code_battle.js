var a = prompt("Give me a string");
a = a.split("");
var numa = 0;
for(var i = 0; i < a.length; i++) {
  if(a[i] == 'a' || a[i] == 'A') {
    numa += 1;
  }
}
console.log(numa);
