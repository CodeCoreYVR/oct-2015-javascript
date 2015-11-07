var a = function(){
  var name = "Tam";
  var b = function(){
    console.log(name);
  }
  b();
}

a();

var a = function(){
  var name = "Tam";
  var b = function(){
    console.log(name);
  }
  return b;
}

a();
