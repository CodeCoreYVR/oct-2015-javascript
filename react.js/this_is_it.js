var cookie = {
  sugarAmount: 10,
  flourAmount: 15,
  calorieCount: function() {
    // `this` references the main object which is `cookie` in this case
    return this.sugarAmount * 4 + this.flourAmount * 3.5;
  },
  info: function() {

    var myMethod = function() {
      // `this` here will reference the global (for instance window) object
      console.log(this.sugarAmount);
    }

    myMethod();

    var mainObject = this;
    var myMethod1 = function() {
      console.log(mainObject.sugarAmount);
    }

    myMethod1();

    var myMethod2 = function() {
      console.log(this.sugarAmount);
    }.bind(this)

    myMethod2();
  }
}
