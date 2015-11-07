// Change "stop" to have the following output:
// "Screeeeetch!!" if speed is "fast"
// "RRrch."        if speed is "medium"
// "sh"            if speed is "slow"
// "Yikes, I don't know how fast I'm going!!!" if speed is anything else.
//
// __Stretch:__ If the speed is a number, output "Screetch!!" with that number of "e"s.

var car = {
  speed: "medium",
  stop: function(){
    if(typeof(this.speed) === "number") {
      var num = "";
      for(var i = 0; i < this.speed; i++) {
        num += "e";
      }
      console.log("Scr" + num + "tch!");
    } else {
      if(this.speed === "slow") {
        console.log("sh");
      } else if (this.speed === "medium") {
        console.log("RRrch.");
      } else if (this.speed === "fast") {
        console.log("Screeeeetch!!");
      } else {
        console.log("Yikes, I don't know how fast I'm going!!!" );
      }
    }
  }
}
// car.stop();
// car.speed = "fast";
// car.stop();
// car.speed = "slow";
// car.stop();

car.speed = 100;
car.stop();
