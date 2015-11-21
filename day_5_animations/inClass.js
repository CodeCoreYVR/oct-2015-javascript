$(document).ready(function(){

  // // get the border-width of the first element on page
  // $("li:first").css("border-width");
  //
  // // Change the border color to all the list items to red
  // $("li").attr("style", "border-color: red;");
  // $("li").css("border-color", "red");
  //
  // // Write a script so that when you click a list item, its border-width is set to 10px.
  // $("li").on("click", function(){
  //   $(this).css("border-width", "10px");
  // });
  //
  // // [Stretch] Write a script so that when you click the rocket ship, it moves 10px to the right.
  // $("#rocket").on("click", function(){
  //   // $(this).css("left", function(index, value){
  //   //   return parseInt(value) + 10 + "px";
  //   // });
  //   var newValue = parseInt($(this).css("left")) + 10 + "px";
  //   $(this).css("left", newValue);
  // });

  // 1. Make sure the rocket ship is using absolute positioning.
  // 2. Figure out which container the rocket ships positioning will be relative to.
  // 3. Change the page's CSS so that the rocket ship is positioned 500px from the top and the left of the page.


  // 5. [Stretch] Write a script so the rocket ship appears wherever you click on the page.
  // $(document).on("click", function(){
  //   var positionLeft = event.pageX + "px";
  //   var positionTop  = event.pageY + "px";
  //   $("#rocket").css("left", positionLeft).css("top", positionTop);
  // });

  // setInterval(function(){
  //   var size = $("#rocket").css("width");
  //   $("#rocket").css("width", parseInt(size) + 1 + "px");
  // }, 33);

  // 1. Make the rocket ship grow twice as quickly.
  // 2. Animate the rocket ship launching into the air using an animation loop.

  // var grow = setInterval(function(){
  //   var size = $("#rocket").css("width");
  //   $("#rocket").css("width", parseInt(size) + 2 + "px");
  // }, 33);
  //
  // setTimeout(function(){
  //   clearInterval(grow);
  // }, 5000);

  // var launch = setInterval(function(){
  //   var bottom = $("#rocket").css("bottom");
  //   // if(parseInt(bottom) >= 200) {
  //   //   clearInterval(launch);
  //   // }
  //   $("#rocket").css("bottom", parseInt(bottom) + 1 + "px");
  // }, 33);
  //
  // setTimeout(function(){
  //   clearInterval(launch);
  // }, 5000);

  // $("#list-item-1").fadeOut(5000, function(){
  //   $("#list-item-2").fadeOut(5000);
  // });

  // $("#list-item-1").fadeOut(1000, function(){
  //   $("#list-item-2").fadeOut(1000, function(){
  //     $("#list-item-3").fadeOut(1000);
  //   });
  // });

  // $("#button-1").on("click", function(){
  //   $("#rocket").toggleClass("size");
  // });

  // $("#button-1").on("click", function(){
  //   var rocketWidth = parseInt($("#rocket").css("width"));
  //   if($("#rocket").data("toggled")) {
  //     var newWidth = rocketWidth / 2 + "px";
  //     $("#rocket").data("toggled", null);
  //   } else {
  //     var newWidth = rocketWidth * 2 + "px"
  //     $("#rocket").data("toggled", true);
  //   }
  //   $("#rocket").css("width", newWidth);
  // });

  // $("#button-2").on("click", function(){
  //   $("#rocket").toggleClass("moved");
  // });
  //
  // $("#rocket").on("click", function(){
  //   $(this).css("opacity", 0);
  // });

    $(document).on("keydown", function(){
      var key = event.which;
      event.preventDefault();
      if(key === 37) { // left
        var left = parseInt($("#rocket").css("left"));
        $("#rocket").css("left", left - 10 + "px");
      } else if(key === 38) { // up
        var bottom = parseInt($("#rocket").css("bottom"));
        $("#rocket").css("bottom", bottom + 10 + "px");
      } else if(key === 39) { // right
        var left = parseInt($("#rocket").css("left"));
        $("#rocket").css("left", left + 10 + "px");
      } else if(key === 40) { // down
        var bottom = parseInt($("#rocket").css("bottom"));
        $("#rocket").css("bottom", bottom - 10 + "px");
      }
    });



});
