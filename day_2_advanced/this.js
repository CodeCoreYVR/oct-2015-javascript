var a = function() { console.log(this) }
a();

var a = {b: 100, func: function(){ console.log(this) }}

a.func();

var a = {
  b: 50,
  func: function() {
    console.log(this.b);
    var _this = this;
    func1 = function() {
      console.log(this);
      console.log(_this);
    }
    func1();
  }
}

a.func();
