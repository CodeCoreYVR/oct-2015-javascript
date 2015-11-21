var Cookie = function(sugarAmount, flourAmount) {
  this.sugarAmount = sugarAmount;
  this.flourAmount = flourAmount;
}

Cookie.prototype.info = function(){
  return "I'm a cookie!";
}

var c  = new Cookie(10, 5);
var c1 = new Cookie(7,8);

c.calorieCount = function(){
  return this.sugarAmount * 4 + this.flourAmount * 3.5;
}

for(var key in c) {
  console.log(key + ": " + c.hasOwnProperty(key));
}
