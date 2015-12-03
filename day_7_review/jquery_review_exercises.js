// Exercise 1
$(".container").on("click", function(){
  $(this).children(".shape").addClass("highlight");
});

// IF you want to prevent the above from happening when clicking on
// a child shape, you should add:
$(".shape").on("click", function(){
  event.stopPropagation();
});

// Exercise 2
$("#button-1").on("click", function(){
  $(".shape").removeClass("large medium").addClass("small");
});

$("#button-2").on("click", function(){
  $(".shape").removeClass("small medium").addClass("large");
});

// Exercise 3
// You will need to add teh following line to your main.css in the .shape
// transition: width 1s, height 1s;
