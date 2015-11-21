var a = prompt("Give us a sentence");

var b = a.split("");

var count = 0;

for(var i = 0; i < b.length; i++){
  if(b[i] === 'a') {
    count++;
  }
}

alert(count);
